export function useNavigation(currentIndex, maxIndex, setCurrentIndex) {
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return { handlePrev, handleNext };
  }
  