import { useWindowSize } from "rooks";
import Breakpoints from "shared/constants/Breakpoints";

const useMedia = () => {
  const { innerWidth } = useWindowSize();

  return {
    isLG: innerWidth >= Breakpoints.LG,
    isMD: innerWidth >= Breakpoints.MD,
    isSM: innerWidth >= Breakpoints.SM,
    isXSM: innerWidth < Breakpoints.SM,
  };
};

export default useMedia;