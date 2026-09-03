import { useEffect, useState } from "react";
import { getFrontendUser, subscribeToPlatformStore, type FrontendUser } from "@/lib/platform-store";

export function usePlatformUser() {
  const [user, setUser] = useState<FrontendUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setUser(getFrontendUser());
      setReady(true);
    };
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);

  return { user, ready };
}
