import { useState, useEffect, useCallback } from "react";

export function useSlideNavigation(slidesCount: number) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slidesCount ? prev + 1 : 1));
  }, [slidesCount]);
  
  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : slidesCount));
  }, [slidesCount]);
  
  // Go to a specific slide
  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= slidesCount) {
      setCurrentSlide(slideNumber);
    }
  }, [slidesCount]);
  
  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen]);
  
  // Monitor fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);
  
  return {
    currentSlide,
    totalSlides: slidesCount,
    nextSlide,
    prevSlide,
    goToSlide,
    isFullscreen,
    toggleFullscreen
  };
}
