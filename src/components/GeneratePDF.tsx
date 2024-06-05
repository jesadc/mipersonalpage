import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import logo from '../assets/LogoIJD.jpg';
import { getBase64ImageFromUrl } from './utils';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

    const documentDefinition: any = {
      content: [
        {
          columns: [
            {
              image: logoBase64,
              width: 150
            },
            {
              text: `Cotización para ${selectedService}`,
              style: 'header',
              alignment: 'right'
            }
          ]
        },
        { text: `\nServicio: ${selectedService}`, style: 'subheader' },
        { text: `Rol: ${selectedRole === 'Otro' ? customRole : selectedRole}`, style: 'subheader' },
        { text: '\nDetalles del Servicio:', style: 'subheader' },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Campo', style: 'tableHeader' }, { text: 'Valor', style: 'tableHeader' }],
              ...Object.keys(details).map(field => [{ text: field, style: 'tableBody' }, { text: details[field] || '', style: 'tableBody' }])
            ]
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return (rowIndex % 2 === 0) ? '#f2f2f2' : null;
            },
            hLineWidth: () => {
              return 0.5;
            },
            vLineWidth: () => {
              return 0.5;
            },
            hLineColor: () => {
              return '#aaaaaa';
            },
            vLineColor: () => {
              return '#aaaaaa';
            },
            paddingLeft: () => { return 4; },
            paddingRight: () => { return 4; },
            paddingTop: () => { return 2; },
            paddingBottom: () => { return 2; }
          }
        },
        !needsWhatsApp && {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: `Total (Precio por ${serviceUnit})`, style: 'tableHeader' }, { text: `$${servicePrice}`, style: 'tableBody' }]
            ]
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return (rowIndex % 2 === 0) ? '#f2f2f2' : null;
            },
            hLineWidth: () => {
              return 0.5;
            },
            vLineWidth: () => {
              return 0.5;
            },
            hLineColor: () => {
              return '#aaaaaa';
            },
            vLineColor: () => {
              return '#aaaaaa';
            },
            paddingLeft: () => { return 4; },
            paddingRight: () => { return 4; },
            paddingTop: () => { return 2; },
            paddingBottom: () => { return 2; }
          }
        },
        { text: '\nTodos los precios de las cotizaciones pueden variar y cambiar sin previo aviso. Si necesita una cotización más clara, comuníquese por WhatsApp al 9996431444.', style: 'note' }
      ].filter(Boolean),
      footer: (currentPage: number, pageCount: number) => {
        return {
          columns: [
            { text: `Página ${currentPage} de ${pageCount}`, alignment: 'left' },
            { text: 'Contacto: 9996431444 | jesadc571@gmail.com', alignment: 'right' }
          ],
          margin: [40, 0]
        };
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10]
        },
        subheader: {
          fontSize: 15,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black',
          fillColor: '#cccccc'
        },
        tableBody: {
          fontSize: 12,
          color: 'black'
        },
        note: {
          italics: true,
          fontSize: 12,
          margin: [0, 10, 0, 0]
        }
      },
      defaultStyle: {
        font: 'Roboto'
      }
    };

    pdfMake.createPdf(documentDefinition).download('cotizacion.pdf');
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
