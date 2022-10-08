import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import '../Pages Css/QRGenerator.css';


const QRGenerator = () => {
  const [station, setStation] = useState("");
  const [searchStation, setSearchStation] = useState("");
  const canvasHTML = useRef(null);
  var QRCode = require("qrcode");
  
  useEffect(() => {
    fetch("http://localhost:3001/getStation")
      .then((res) => res.json())
      .then((data) => {
        setStation(data[0].station_name);
        setSearchStation([...data]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  
  useEffect(() => {
    if (canvasHTML) {
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "http://localhost:3000?`" + station + "`", function (error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }, [station]);

  const handlePng = () => {
    const canvas = document.getElementById("canvas");
    const img = canvas.toDataURL("image/png");
    document.getElementById("png").href = img;
  };

  const handlePdf = () => {
    const canvas = document.getElementById("canvas");
    var imgData = canvas.toDataURL("image/png");
    const doc = new jsPDF("p", "mm");

    doc.addImage(imgData, "PNG", 10, 10);
    doc.save("QR-CODE.pdf");
  };

  return (
    <>
      <div className="fixedCenter container">
        <div className="title">Generate QRCode</div>
        <div>
          <label className="label" htmlFor="station">
            Station
          </label>
          <select onChange={e=>setStation(e.target.value)}>
            {
              searchStation.length !== 0 && searchStation.map(station=>{
                return <option value={station.station_name} key={station.station_name}>{station.station_name}</option>
              })
            }
          </select>
        </div>
        <canvas id="canvas" ref={canvasHTML}></canvas>
        <div className="download-links">
          <a className="label" id="png" onClick={handlePng} download>
            Download Png
          </a>
          <br />
          <a className="label" id="pdf" onClick={handlePdf} download>
            Download Pdf
          </a>
        </div>
      </div>
    </>
  );
};

export default QRGenerator;
