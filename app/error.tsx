"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    try {
      const details = error.stack || "";
      const w = window as unknown as {
        __recordHostError?: (msg: string, details: string) => void;
        parent?: Window | null;
      };

      w.__recordHostError?.(error.message, details);
      window.parent?.postMessage(
        { type: "host_error", error: error.message, details },
        "*",
      );
    } catch {
      // ignore
    }
  }, [error]);

  return null;
}
