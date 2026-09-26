import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Standard 16:9 presentation dimensions in mm (A4 width 297mm x 167.0625mm height)
export const SLIDE_PDF_WIDTH_MM = 297;
export const SLIDE_PDF_HEIGHT_MM = 167.0625;

/**
 * Creates an initialized jsPDF document configured for 16:9 widescreen slides
 */
export function createClimoraPdfDocument(): jsPDF {
  return new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [SLIDE_PDF_WIDTH_MM, SLIDE_PDF_HEIGHT_MM],
    compress: true
  });
}

/**
 * Captures an HTML element using html2canvas with high-DPI scaling (2x)
 */
export async function captureSlideElement(element: HTMLElement): Promise<HTMLCanvasElement> {
  return html2canvas(element, {
    scale: 2, // 2x scale for ultra-crisp vector-like typography and crisp graphics
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#042017',
    logging: false,
    imageTimeout: 12000,
    windowWidth: 1280,
    windowHeight: 720
  });
}

/**
 * Adds captured canvas as a high-fidelity JPEG slide into the jsPDF document
 */
export function appendSlideToPdf(
  pdf: jsPDF,
  canvas: HTMLCanvasElement,
  isFirstPage: boolean
): void {
  const imgData = canvas.toDataURL('image/jpeg', 0.95);

  if (isFirstPage) {
    pdf.addImage(imgData, 'JPEG', 0, 0, SLIDE_PDF_WIDTH_MM, SLIDE_PDF_HEIGHT_MM, undefined, 'FAST');
  } else {
    pdf.addPage([SLIDE_PDF_WIDTH_MM, SLIDE_PDF_HEIGHT_MM], 'landscape');
    pdf.addImage(imgData, 'JPEG', 0, 0, SLIDE_PDF_WIDTH_MM, SLIDE_PDF_HEIGHT_MM, undefined, 'FAST');
  }
}
