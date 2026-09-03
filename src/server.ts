import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    console.log("Loading TanStack server entry...");

    serverEntryPromise = import("@tanstack/react-start/server-entry")
      .then((m) => {
        console.log("TanStack server entry loaded");
        return (m.default ?? m) as ServerEntry;
      })
      .catch((error) => {
        console.error("🔥 FAILED TO LOAD SERVER ENTRY:", error);
        throw error;
      });
  }

  return serverEntryPromise;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();

      console.log("SSR request:", request.url);

      const response = await handler.fetch(request, env, ctx);

      console.log("SSR response:", response.status);

      if (response.status >= 500) {
        const body = await response.clone().text();

        console.error("SSR 500 BODY:", body);
        console.error(
          "CAPTURED ERROR:",
          consumeLastCapturedError(),
        );
      }

      return response;
    } catch (error) {
      console.error("🔥 ACTUAL SSR EXCEPTION:");
      console.error(error);

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  },
};