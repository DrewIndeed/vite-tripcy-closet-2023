import { useEffect, useRef } from "react";

export const useSmoothScrollTo = (id: string) => {
  const ref = useRef(null);
  useEffect(() => {
    const listener = () => {
      if (ref.current && location.hash === id)
        (ref.current as any)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("hashchange", listener, true);
    return () => {
      window.removeEventListener("hashchange", listener);
    };
  }, []);
  return {
    "data-anchor-id": id,
    ref,
  };
};
