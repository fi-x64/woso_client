import React, { useState } from "react";
import { Button, QRCode, Segmented, Space } from "antd";

function doDownload(url, fileName) {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const QRCodeGenerator = ({ value, batchCode }) => {
  const [renderType, setRenderType] = useState("canvas");

  const downloadCanvasQRCode = () => {
    const canvas = document.getElementById("myqrcode")?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      doDownload(url, `QRCode-${batchCode}.png`);
    }
  };

  return (
    <Space id="myqrcode" direction="vertical">
      <div>
        <QRCode
          type={renderType}
          value={value}
          bgColor="#fff"
          style={{
            marginBottom: 16,
          }}
        />
        <Button type="primary" onClick={downloadCanvasQRCode}>
          Download
        </Button>
      </div>
    </Space>
  );
};
export default QRCodeGenerator;
