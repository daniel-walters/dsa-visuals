import { useEffect, useState } from "react";

export default function useMedia(width: string) {
  const query = `(max-width: ${width}px)`;

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    function handleMedia(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    setMatches(window.matchMedia(query).matches);

    window.matchMedia(query).addEventListener("change", handleMedia);

    return () =>
      window.matchMedia(query).removeEventListener("change", handleMedia);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches;
}
