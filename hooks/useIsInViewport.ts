import { useEffect, useState } from "react";

const useIsInViewport = (id: string) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const updateIsInVieport = () => {
      const estateHeaderTitle = document.querySelector(id);
      const rect = estateHeaderTitle?.getBoundingClientRect();
      if (rect) {
        setIsInViewport(
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }
    };
    window.addEventListener("scroll", updateIsInVieport);
    updateIsInVieport();
    return () => window.removeEventListener("scroll", updateIsInVieport);
  }, []);
  return isInViewport;
};

export default useIsInViewport;
