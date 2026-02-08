import { BrowserMultiFormatReader } from "@zxing/browser";
import { useEffect, useRef, useState } from "react";

export default function QRScanner() {
  const videoRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const reader = new BrowserMultiFormatReader();

    reader.decodeFromVideoDevice(null, videoRef.current, (res, err) => {
      if (res) {
        setResult("Attendance marked successfully ✔");
        reader.reset();
      }
    });

    return () => reader.reset();
  }, []);

  return (
    <>
      <video ref={videoRef} style={{ width: "100%", borderRadius: "12px" }} />
      {result && <p style={{ marginTop: "12px", color: "lime" }}>{result}</p>}
    </>
  );
}
