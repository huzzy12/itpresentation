import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideControls from "./SlideControls";
import TitleSlide from "./slides/TitleSlide";
import IntroductionSlide from "./slides/IntroductionSlide";
import EarlyStrugglesSlide from "./slides/EarlyStrugglesSlide";
import DeregulationSlide from "./slides/DeregulationSlide";
import DigitalTransformationSlide from "./slides/DigitalTransformationSlide";
import KeyProductsSlide from "./slides/KeyProductsSlide";
import ExportGrowthSlide from "./slides/ExportGrowthSlide";
import EmploymentImpactSlide from "./slides/EmploymentImpactSlide";
import GdpTelecomSlide from "./slides/GdpTelecomSlide";
import CallToActionSlide from "./slides/CallToActionSlide";
import { useSlideNavigation } from "@/hooks/use-slide-navigation";

const slides = [
  TitleSlide,
  IntroductionSlide,
  EarlyStrugglesSlide,
  DeregulationSlide,
  DigitalTransformationSlide,
  KeyProductsSlide,
  ExportGrowthSlide,
  EmploymentImpactSlide,
  GdpTelecomSlide,
  CallToActionSlide,
];

const Presentation = () => {
  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    isFullscreen,
    toggleFullscreen
  } = useSlideNavigation(slides.length);

  // Track window dimensions for responsive layout
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create slides with props
  const slideComponents = slides.map((SlideComponent, index) => (
    <SlideComponent 
      key={index} 
      isActive={currentSlide === index + 1} 
    />
  ));

  return (
    <div className="presentation-container">
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      <div
        id="slides"
        className="relative h-screen overflow-hidden bg-gray-900"
        style={{ height: dimensions.height }}
      >
        {slideComponents}
      </div>
    </div>
  );
};

export default Presentation;
