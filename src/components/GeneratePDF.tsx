import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/LogoIJD.jpg';
import { getBase64ImageFromUrl } from './utils';

interface GeneratePDFProps {
  selectedService: string;
  selectedRole: string;
  customRole: string;
  details: { [key: string]: string };
  servicePrice: number;
  serviceUnit: string;
  needsWhatsApp: boolean;
  isFormComplete: boolean;
}

const GeneratePDF: React.FC<GeneratePDFProps> = ({ selectedService, selectedRole, customRole, details, servicePrice, serviceUnit, needsWhatsApp, isFormComplete }) => {
  const generatePDF = async () => {
    const logoBase64 = await getBase64ImageFromUrl(logo);

    const doc = new jsPDF();

    // Add logo
    doc.addImage(logoBase64, 'JPEG', 10, 10, 50, 50);

    // Add title
    doc.setFontSize(18);
    doc.text(`Cotización para ${selectedService}`, 70, 30, { maxWidth: 120 });

    // Add service details
    doc.setFontSize(12);
    doc.text(`Servicio: ${selectedService}`, 10, 70);
    doc.text(`Rol: ${selectedRole === 'Otro' ? customRole : selectedRole}`, 10, 80);

    // Add table header
    doc.setFontSize(12);
    doc.text('Detalles del Servicio:', 10, 90);

    // Prepare table data
    const tableData = Object.keys(details).map((field) => [field, details[field] || '']);

    // Add table
    (doc as any).autoTable({
      startY: 100,
      head: [['Campo', 'Valor']],
      body: tableData,
      styles: { fillColor: [255, 255, 255] },
      headStyles: { fillColor: [211, 211, 211] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      margin: { left: 10, right: 10 },
      theme: 'grid',
    });

    // Add total if not needsWhatsApp
    let finalY = (doc as any).lastAutoTable.finalY;
    if (!needsWhatsApp) {
      finalY = finalY + 10;
      doc.setFontSize(12);
      doc.text(`Total (Precio por ${serviceUnit}): $${servicePrice}`, 10, finalY);
    }

    // Add footer note
    const footerNote = 'Todos los precios de las cotizaciones pueden variar y cambiar sin previo aviso. Si necesita una cotización más clara, comuníquese por WhatsApp al 9996431444.';
    const footerLines = doc.splitTextToSize(footerNote, 180); // Split text into lines with a max width of 180
    finalY = finalY + 20;
    doc.setFontSize(10);
    doc.text(footerLines, 10, finalY);

    // Add footer
    const footerY = 285; // Position for the footer
    const contactY = footerY - 10; // Position for the contact details
    const contactText = 'Contacto: 9996431444 Correo: jesadc571@gmail.com';
    
    const contactLines = doc.splitTextToSize(contactText, 180); // Split text into lines with a max width of 180
    doc.text(contactLines, 10, contactY);
    doc.text('Página 1 de 1', 10, footerY);

    doc.save('cotizacion.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className={`w-full py-2 rounded-lg flex items-center justify-center transition duration-300 bg-blue-500 text-white hover:bg-blue-600 mt-4 ${!isFormComplete && 'opacity-50 cursor-not-allowed'}`}
      disabled={!isFormComplete}
    >
      Descargar Cotización en PDF
    </button>
  );
};

export default GeneratePDF;
