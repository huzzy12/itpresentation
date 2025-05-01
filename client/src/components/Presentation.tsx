import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideControls from "./SlideControls";
import ExportButtons from "./ExportButtons";
import TitleSlide from "./slides/TitleSlide";
import IntroductionSlide from "./slides/IntroductionSlide";
import EarlyStrugglesSlide from "./slides/EarlyStrugglesSlide";
import DeregulationSlide from "./slides/DeregulationSlide";
import BroadbandDigitalPakistanSlide from "./slides/BroadbandDigitalPakistanSlide";
import DigitalPakistanVisionSlide from "./slides/DigitalPakistanVisionSlide";
import NewKeyProductsServicesSlide from "./slides/NewKeyProductsServicesSlide";
import ExportsGrowthSlide from "./slides/ExportsGrowthSlide";
import TelecomRevenueSlide from "./slides/TelecomRevenueSlide";
import NewEmploymentImpactSlide from "./slides/NewEmploymentImpactSlide";
import FreelanceEconomySlide from "./slides/FreelanceEconomySlide";
import PolicyWinsSlide from "./slides/PolicyWinsSlide";
import DigitalTransformationSlide from "./slides/DigitalTransformationSlide";
import GdpTelecomSlide from "./slides/GdpTelecomSlide";
import GdpContributionSlide from "./slides/GdpContributionSlide";
import ForeignInvestmentSlide from "./slides/ForeignInvestmentSlide";
import InnovationEcosystemSlide from "./slides/InnovationEcosystemSlide";
import DigitalConnectivitySlide from "./slides/DigitalConnectivitySlide";
import CompetitiveAdvantagesSlide from "./slides/CompetitiveAdvantagesSlide";
import ChallengesOpportunitiesSlide from "./slides/ChallengesOpportunitiesSlide";
import FutureGrowthSlide from "./slides/FutureGrowthSlide";
import PolicyRecommendationsSlide from "./slides/PolicyRecommendationsSlide";
import CaseStudiesSlide from "./slides/CaseStudiesSlide";
import RegionalComparisonSlide from "./slides/RegionalComparisonSlide";
import DigitalUptakeSlide from "./slides/DigitalUptakeSlide";
import SummaryKeyTakeawaysSlide from "./slides/SummaryKeyTakeawaysSlide";
import ThankYouSlide from "./slides/ThankYouSlide";
import { useSlideNavigation } from "@/hooks/use-slide-navigation";

const slides = [
  TitleSlide,                     // 1
  IntroductionSlide,              // 2
  EarlyStrugglesSlide,            // 3
  DeregulationSlide,              // 4
  BroadbandDigitalPakistanSlide,  // 5
  DigitalPakistanVisionSlide,     // 6
  NewKeyProductsServicesSlide,    // 7
  ExportsGrowthSlide,             // 8
  TelecomRevenueSlide,            // 9
  NewEmploymentImpactSlide,       // 10
  FreelanceEconomySlide,          // 11
  PolicyWinsSlide,                // 12
  DigitalTransformationSlide,     // 13
  GdpTelecomSlide,                // 14
  GdpContributionSlide,           // 15
  ForeignInvestmentSlide,         // 16
  InnovationEcosystemSlide,       // 17
  DigitalConnectivitySlide,       // 18
  CompetitiveAdvantagesSlide,     // 19
  ChallengesOpportunitiesSlide,   // 20
  FutureGrowthSlide,              // 21
  PolicyRecommendationsSlide,     // 22
  CaseStudiesSlide,               // 23
  RegionalComparisonSlide,        // 24
  DigitalUptakeSlide,             // 25
  SummaryKeyTakeawaysSlide,       // 26
  ThankYouSlide,                  // 27
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

  const [isExporting, setIsExporting] = useState(false);

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
      isActive={currentSlide === index + 1 || isExporting} 
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
        disabled={isExporting}
      />

      <ExportButtons 
        onExportStart={() => setIsExporting(true)}
        onExportEnd={() => setIsExporting(false)}
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
