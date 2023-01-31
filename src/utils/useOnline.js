import { useEffect, useState } from "react";

const useOnline = () => {
  const handleOffline = () => {
    setIsOnline(true);
  };

  const handleOnline = () => {
    setIsOnline(false);
  };

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);

      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
