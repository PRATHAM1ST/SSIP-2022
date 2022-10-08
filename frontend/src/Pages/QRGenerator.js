import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";

const QRGenerator = () => {
  const [station, setStation] = useState('');
  const canvasHTML = useRef(null);
  var QRCode = require("qrcode");

  useEffect(() => {
    if (canvasHTML) {
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "sample text", function (error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }, []);

  const handlePng = () => {
    const canvas = document.getElementById("canvas");
    const img = canvas.toDataURL("image/png");
    document.getElementById("png").href = img;
  };

  const handlePdf = () => {
    const canvas = document.getElementById("canvas");
    var imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm');

    doc.addImage(imgData, 'PNG', 10, 10);
    doc.save("QR-CODE.pdf");
  };

  return (
    <>
      <div className="fixedCenter container">
        <div className="title"> Generate QRCode</div>
        <div>
          <label className="label" htmlFor="station">Station</label>
          <input id="station" value={station} onChange={e=>setStation(e.target.value)} className="input" placeholder='Give the Station Name'/>
        </div>
        <canvas id="canvas" ref={canvasHTML}></canvas>
        <div>
          <a className="label" id="png" onClick={handlePng} download>
            Download Png
          </a><br/>
          <a className="label" id="pdf" onClick={handlePdf} download>
            Download Pdf
          </a>
        </div>
      </div>
    </>
  );
};

export default QRGenerator;
