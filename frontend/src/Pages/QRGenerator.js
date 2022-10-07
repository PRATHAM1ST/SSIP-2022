import { useEffect, useRef } from "react";
const QRGenerator = () => {
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
    QRCode.toFile("foo.png", [
        { data: [253,254,255], mode: 'byte' },
    ],()=>{}, err => {
        if (err) throw err
        console.log(`success`, '✓ Okay, Has successfully generate & save your qrcode.')
       });
  };

  const handlePdf = () => {
    QRCode.toFile("foo.pdf", [
      { data: new Uint8ClampedArray([253, 254, 255]), mode: "byte" },
    ]);
  };

  return (
    <>
      <div className="fixedCenter">
        <canvas id="canvas" ref={canvasHTML}></canvas>
        <a onClick={handlePng} download>Download Png</a>
        <a onClick={handlePdf} download>Download Pdf</a>
      </div>
    </>
  );
};

export default QRGenerator;
