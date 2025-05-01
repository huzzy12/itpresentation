import { useState } from 'react';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';

interface ExportButtonsProps {
  onExportStart?: () => void;
  onExportEnd?: () => void;
}

const ExportButtons = ({ onExportStart, onExportEnd }: ExportButtonsProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const captureSlide = async (slide: HTMLElement) => {
    // Set slide to active state for capture
    const wasActive = slide.classList.contains('active');
    if (!wasActive) {
      slide.classList.add('active');
      slide.style.opacity = '1';
      slide.style.transform = 'none';
      slide.style.position = 'relative'; // Ensure proper rendering
    }

    // Wait for animations to complete
    await new Promise(resolve => setTimeout(resolve, 100));

    // Capture with high quality settings
    const canvas = await html2canvas(slide, {
      scale: 3, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#FFFFFF',
      width: 1920, // 16:9 aspect ratio
      height: 1080,
      windowWidth: 1920,
      windowHeight: 1080,
      foreignObjectRendering: true,
      removeContainer: false,
      allowTaint: true,
    });

    // Restore slide state
    if (!wasActive) {
      slide.classList.remove('active');
      slide.style.opacity = '';
      slide.style.transform = '';
      slide.style.position = '';
    }

    return canvas.toDataURL('image/png', 1.0);
  };

  const exportToPPTX = async () => {
    try {
      setIsExporting(true);
      onExportStart?.();

      const pptx = new pptxgen();

      // Set presentation properties
      pptx.layout = 'LAYOUT_16x9';
      pptx.author = 'Pakistan Pulse';
      pptx.title = 'Pakistan IT & Telecom Sector';

      // Get all slides
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;

      // Process each slide
      for (let i = 0; i < totalSlides; i++) {
        const slideElement = slides[i] as HTMLElement;
        const imageData = await captureSlide(slideElement);
        
        // Add slide with proper formatting
        const slide = pptx.addSlide();
        
        // Add background
        slide.background = { color: 'FFFFFF' };
        
        // Add image with precise positioning
        slide.addImage({
          data: imageData,
          x: 0,
          y: 0,
          w: '100%',
          h: '100%',
          sizing: {
            type: 'contain',
            w: '100%',
            h: '100%',
          },
        });

        // Add slide number (except title and thank you slides)
        if (i > 0 && i < totalSlides - 1) {
          slide.addText(
            `${i} / ${totalSlides - 2}`,
            {
              x: '95%',
              y: '95%',
              w: '4%',
              h: '4%',
              fontSize: 10,
              color: '666666',
              align: 'right',
              valign: 'bottom',
            }
          );
        }
      }

      // Save with high-quality settings
      await pptx.writeFile({
        fileName: 'pakistan-pulse-presentation.pptx',
        compression: true,
      });
    } catch (error) {
      console.error('PPTX export failed:', error);
    } finally {
      setIsExporting(false);
      onExportEnd?.();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={exportToPPTX}
        disabled={isExporting}
        className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
      >
        {isExporting ? (
          <>
            <i className="fas fa-circle-notch fa-spin"></i>
            <span>Exporting...</span>
          </>
        ) : (
          <>
            <i className="fas fa-file-powerpoint"></i>
            <span>Export to PowerPoint</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ExportButtons; 