import React, { useEffect, useState } from 'react'

function useCurrentWindowWidth(ele: HTMLElement | null) {
console.log(ele);
  const [windowWidth, setWindowWidth] = useState(!ele ? 0 : ele.offsetWidth);

  useEffect(() => {
    if (!ele) return;
    const handleResizeWindow = () => {
        setWindowWidth(ele.offsetWidth);
    };
    ele.addEventListener("resize", handleResizeWindow);
    return () => {
        ele.removeEventListener("resize", handleResizeWindow);
    }
  });

  return windowWidth;
}

export default useCurrentWindowWidth