import { useEffect, useState } from "react";
import { useResize } from "../../../hooks/useResize";

const useInitialVisibilityState = () => {
  const [resultState, setResultState] = useState({
    isMobileView: false,
    dateSection: {
      isVisible: false,
      stepNumber: 1,
    },
    spotsSection: {
      isVisible: false,
      stepNumber: 2,
    },
    dividedSpotTypesSection: {
      isVisible: false,
      stepNumber: 1,
    },
  });
  const { isScreenSmall } = useResize();

  useEffect(() => {
    if (isScreenSmall) {
      setResultState({
        isMobileView: true,
        dateSection: {
          isVisible: false,
          stepNumber: 2,
        },
        spotsSection: {
          isVisible: false,
          stepNumber: 3,
        },
        dividedSpotTypesSection: {
          isVisible: true,
          stepNumber: 1,
        },
      });
      return;
    }

    setResultState({
      isMobileView: false,
      dateSection: {
        isVisible: true,
        stepNumber: 1,
      },
      spotsSection: {
        isVisible: false,
        stepNumber: 2,
      },
      dividedSpotTypesSection: {
        isVisible: false,
        stepNumber: 1,
      },
    });
  }, [isScreenSmall]);

  return resultState;
};

export default useInitialVisibilityState;
