import { useMediaQuery } from "react-responsive";
import { devices } from "@/styles/themes";

const useGlobalMedia = () => {
  // responsive hooks
  const useMobileMedium = () => useMediaQuery({ query: devices.mobileM });
  const useTablet = () => useMediaQuery({ query: devices.tablet });
  const useLaptop = () => useMediaQuery({ query: devices.laptop });
  const useLaptopLarge = () => useMediaQuery({ query: devices.laptopL });

  // responsive wrappers
  const MobileMedium = ({ children }: { children: any }) => {
    const isMobileMedium = useMobileMedium();
    return isMobileMedium ? children : null;
  };
  const Tablet = ({ children }: { children: any }) => {
    const isTable = useTablet();
    return isTable ? children : null;
  };
  const Laptop = ({ children }: { children: any }) => {
    const isLaptop = useLaptop();
    return isLaptop ? children : null;
  };
  const LaptopLarge = ({ children }: { children: any }) => {
    const isLaptopLarge = useLaptopLarge();
    return isLaptopLarge ? children : null;
  };

  const hooks = { useMobileMedium, useTablet, useLaptop, useLaptopLarge };
  const MediaWrappers = {
    MobileMedium,
    Tablet,
    Laptop,
    LaptopLarge,
  };

  return { hooks, MediaWrappers };
};

export default useGlobalMedia;
