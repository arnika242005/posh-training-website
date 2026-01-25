import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // A 0ms timeout pushes the execution to the end of the event loop
    // This allows the route change to finish before jumping, reducing lag.
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Forces the jump to be instant, not smooth
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
}