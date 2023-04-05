import { useMediaQuery } from "react-responsive";
import { devices } from "@/styles/themes";

const useGlobalMedia = () => {
  // responsive hooks
  const useMobileMedium = () => useMediaQuery({ query: devices.mobileM });
  const useTablet = () => useMediaQuery({ query: devices.tablet });
  const useLaptop = () => useMediaQuery({ query: devices.laptop });
  const useLaptopMedium = () => useMediaQuery({ query: devices.laptopM });
  const useLaptopLarge = () => useMediaQuery({ query: devices.laptopL });

  // responsive booleans
  const isMobileMedium = useMobileMedium();
  const isTablet = useTablet();
  const isLaptop = useLaptop();
  const isLaptopMedium = useLaptopMedium();
  const isLaptopLarge = useLaptopLarge();

  // responsive wrappers
  const MobileMedium = ({ children }: { children: any }) =>
    isMobileMedium ? children : null;
  const Tablet = ({ children }: { children: any }) =>
    isTablet ? children : null;
  const Laptop = ({ children }: { children: any }) =>
    isLaptop ? children : null;
  const LaptopMedium = ({ children }: { children: any }) =>
    isLaptop ? children : null;
  const LaptopLarge = ({ children }: { children: any }) =>
    isLaptopLarge ? children : null;

  // this hook's objects
  const hooks = {
    useMobileMedium,
    useTablet,
    useLaptop,
    useLaptopMedium,
    useLaptopLarge,
  };
  const booleans = {
    isMobileMedium,
    isTablet,
    isLaptop,
    isLaptopMedium,
    isLaptopLarge,
  };
  const MediaWrappers = {
    MobileMedium,
    Tablet,
    Laptop,
    LaptopMedium,
    LaptopLarge,
  };

  return { hooks, booleans, MediaWrappers };
};

export default useGlobalMedia;
