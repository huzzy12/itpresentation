import { motion } from "framer-motion";

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const SlideControls = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  isFullscreen,
  onToggleFullscreen,
}: SlideControlsProps) => {
  return (
    <motion.div 
      className="fixed bottom-4 left-1/2 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 flex items-center space-x-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{ transform: 'translateX(-50%)' }}
    >
      <button 
        onClick={onPrev} 
        disabled={currentSlide === 1}
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-xl"></i>
      </button>
      <div className="text-sm font-medium text-gray-600">{currentSlide} / {totalSlides}</div>
      <button 
        onClick={onNext} 
        disabled={currentSlide === totalSlides}
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-xl"></i>
      </button>
      <button 
        onClick={onToggleFullscreen} 
        className="text-gray-600 hover:text-primary transition-colors ml-2"
        aria-label="Toggle fullscreen"
      >
        <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'} text-xl`}></i>
      </button>
    </motion.div>
  );
};

export default SlideControls;
