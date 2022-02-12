import { useEffect } from "react";
import Aos from "aos";

const useAos = () => {
  return useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
};

export default useAos;
