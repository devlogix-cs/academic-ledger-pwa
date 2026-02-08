import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sessionData = JSON.stringify({
      class: "CS-A",
      subject: "Blockchain",
      time: Date.now()
    });

    QRCode.toCanvas(canvasRef.current, sessionData);
  }, []);

  return <canvas ref={canvasRef} />;
}
