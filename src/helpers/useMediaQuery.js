import { useEffect, useCallback, useState } from 'react';

const useMediaQuery = () => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(max-width: 800px)")
    media.addEventListener("change", updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener("change", updateTarget)
  }, [])

  return targetReached;
}

export default useMediaQuery;