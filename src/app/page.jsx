"use client";
import App from "@/components/App";
import { useEffect, useState } from "react";
import Offline from "@/components/Offline";

export default function Home() {
  const [internet, setInternet] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateOnlineStatus = () => {
        setInternet(navigator.onLine);
      };

      // Set the initial status
      setInternet(navigator.onLine);

      // Set up event listeners for online and offline events
      window.addEventListener("online", updateOnlineStatus);
      window.addEventListener("offline", updateOnlineStatus);

      // Check for internet connection status every 2 seconds
      const interval = setInterval(updateOnlineStatus, 2000);

      // Clean up event listeners and interval on component unmount
      return () => {
        window.removeEventListener("online", updateOnlineStatus);
        window.removeEventListener("offline", updateOnlineStatus);
        clearInterval(interval);
      };
    }
  }, []);

  return <>{internet ? <App /> : <Offline />}</>;
}
