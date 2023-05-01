import { useEffect, useState } from "react";
type ReturnType = [boolean, (locked: boolean) => void];
const isIosDevice =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.platform &&
  /iP(ad|hone|od)/.test(window.navigator.platform);

const useLockBodyScroll = (
  initialLocked = false,
  options: { delayLockForIos: number } = { delayLockForIos: 200 }
): ReturnType => {
  const [locked, setLocked] = useState(initialLocked);

  useEffect(() => {
    if (!locked) {
      return;
    }

    // Save initial body style
    const originalOverflow = document.body.style.overflow;

    const originalPaddingRight = document.body.style.paddingRight;
    const originalDocumentOverflow = document.documentElement.style.overflow;
    const originalBodyHeight = document.body.style.height;
    const originalDocumentHeight = document.documentElement.style.height;
    const scrollY = window.scrollY;
    const openingUrl = window.location.href.split(/[?#]/)[0];
    let timerId: NodeJS.Timeout;

    // Lock body scroll
    document.body.style.overflow = "hidden";
    timerId = setTimeout(() => {
      if (isIosDevice) {
        document.body.style.height = "100%";
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.height = "100%";
      }
    }, options.delayLockForIos);

    // Get the scrollBar width
    const root = document.getElementById("__next"); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      clearTimeout(timerId);
      document.body.style.overflow = originalOverflow;
      if (isIosDevice) {
        const closingUrl = window.location.href.split(/[?#]/)[0];
        document.body.style.height = originalBodyHeight;
        document.documentElement.style.overflow = originalDocumentOverflow;
        document.documentElement.style.height = originalDocumentHeight;
        window.scrollTo({
          top: openingUrl === closingUrl ? scrollY : 0,
        });
      }

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
};

export { useLockBodyScroll };
