"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>; 
};

export function PwaRegister() {
  const [installable, setInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !window.location.protocol.startsWith("http")) {
      return;
    }

    const swUrl = new URL("sw.js", window.location.href).toString();

    navigator.serviceWorker.register(swUrl).catch((error) => {
      console.warn("PWA service worker registration failed:", error);
    });

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => setInstallable(false));

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", () => setInstallable(false));
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setInstallable(false);
  };

  if (!installable) {
    return null;
  }

  return (
    <button type="button" className="pwa-install-button" onClick={handleInstallClick}>
      Install app
    </button>
  );
}
