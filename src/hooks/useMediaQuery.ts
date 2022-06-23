import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let mounted = true;

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handler = (event: MediaQueryListEvent) => {
      if (!mounted) {
        return;
      }
      setMatches(event.matches);
    };

    if (mediaQueryList.addListener) {
      mediaQueryList.addListener(handler);
    } else {
      mediaQueryList.addEventListener("change", handler);
    }

    return () => {
      mounted = false;
      if (mediaQueryList.removeListener) {
        mediaQueryList.removeListener(handler);
      } else {
        mediaQueryList.removeEventListener("change", handler);
      }
    };
  }, [query]);

  return Boolean(matches);
};

export default useMediaQuery;
