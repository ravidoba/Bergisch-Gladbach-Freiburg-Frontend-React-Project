import React from 'react';
import './Certificate.css'; // Import the CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import html2canvas from 'html2canvas'; // Import html2canvas
import Stamp from  '../../../assets/Degree/STEMP.png';
const Certificate: React.FC = () => {
    const handleDownloadPDF = () => {
        const certificateElement = document.getElementById("certificate");
        if (certificateElement) {
            import("html2pdf.js")
                .then(html2pdf => {
                    html2pdf().from(certificateElement).save('certificate.pdf');
                });
        }
    };

    const handleDownloadPNG = () => {
        const certificateElement = document.getElementById("certificate");
        if (certificateElement) {
            html2canvas(certificateElement).then(canvas => {
                const dataUrl = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = 'certificate.png';
                link.click();
            });
        }
    };

    return (
        <div>
            <div id="certificate" className="degree-certificate container my-5 p-4">
                <h1 className="text-center text-uppercase text-danger border-bottom pb-3 mb-4">BERGISCH GLADBACH FREIBURG UNIVERSITY</h1>

                <div className="degree-certificate-text-with-image d-flex justify-content-center align-items-center my-4">
                    <img className="degree-certificate-img rounded-circle border border-danger p-2 me-4" src={Stamp} alt="University Logo" />
                    <p>
                        The President and Fellows of Tollance College, with the consent of the Honorable and Reverend Board of
                        Overseers and acting on the recommendation of the Faculty of Sciences, have conferred on
                    </p>
                </div>

                <h2 className="text-center text-uppercase fw-bold my-3">DOBARIYA RAVI MANSUKHBHAI</h2>
                <p className="degree-certificate-degree-description text-center fst-italic">the degree of Bachelor of Technology with a concentration in Computer Science.</p>
                <p className="text-justify">
                    In witness whereof, by authority duly committed to us, we have hereunder placed our names and the seal of
                    the University on this twenty-sixth day of May in the Year of Our Lord two thousand and nineteen and of
                    Tollance University the eleventh.
                </p>

                <div className="degree-certificate-footer d-flex justify-content-between align-items-end mt-5">
                    <p className="fw-bold text-center flex-fill position-relative pb-4">PRESENT</p>
                    <p className="fw-bold text-center flex-fill position-relative pb-4">DEAN OF UNIVERSITY</p>
                    <img className="degree-certificate-footer-img" src={Stamp} alt="University Logo" />
                </div>
            </div>

            {/* Download Buttons */}
            <div className="text-center mt-4">
                <button onClick={handleDownloadPDF} className="btn btn-primary me-2">
                    Download as PDF
                </button>
                <button onClick={handleDownloadPNG} className="btn btn-secondary">
                    Download as PNG
                </button>
            </div>
        </div>
    );
};

export default Certificate;
