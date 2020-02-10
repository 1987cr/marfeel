import React from "react";
import throttle from "lodash.throttle";

const useTopOffset = () => {
  const [topOffset, setTopOffset] = React.useState(window.pageYOffset);

  const onScroll = React.useCallback(
    throttle(() => setTopOffset(window.pageYOffset), 200),
    []
  );

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      onScroll.cancel();
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return topOffset;
};

export default useTopOffset;
