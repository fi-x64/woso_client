import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import QRcode from "qrcode";
import "./BatchView.scss";
import QRCodeGenerator from "../../components/atom/QRCode/QRCode";

const DNS = import.meta.env.VITE_DNS;

const columns = [
  {
    title: "Field",
    dataIndex: "field",
    key: "field",
    width: "50%",
  },
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
    width: "50%",
  },
];

function BatchView({ isModalViewBatch, setIsModalViewBatch, currentBatch }) {
  const data = [
    {
      key: "1",
      field: "Batch Code",
      data: currentBatch.batchCode,
    },
    {
      key: "2",
      field: "Product Origin",
      data: currentBatch.productOrigin,
    },
    {
      key: "3",
      field: "Country Of Destination",
      data: currentBatch.countryOfDestination,
    },
    {
      key: "4",
      field: "Date of Shipment",
      data: currentBatch.dateOfShipment,
    },
    {
      key: "5",
      field: "Expiration Date",
      data: currentBatch.expirationDate,
    },
    {
      key: "6",
      field: "Test Report Link Name",
      data: currentBatch.testReportLinkName,
    },
    {
      key: "7",
      field: "Test Report",
      data: currentBatch.testReport,
    },
  ];

  useEffect(() => {
    generateQRCode(currentBatch.batchCode);
  });

  // Generate QRCode
  const [qrCodeLink, setQRCodeLink] = useState();

  const generateQRCode = (batchCode) => {
    const url = `${DNS}/batchInfo/${batchCode}`;

    QRcode.toDataURL(url, (err, qrCodeUrl) => {
      setQRCodeLink(qrCodeUrl);
    });
  };

  return (
    <>
      <Modal
        title={
          <h1 className="bold text-4xl">View Batch {currentBatch.batchCode}</h1>
        }
        className="new-batch-modal"
        open={isModalViewBatch}
        cancelText="Close"
        footer={[
          <Button key="close" onClick={() => setIsModalViewBatch(false)}>
            Close
          </Button>,
        ]}
        onCancel={() => setIsModalViewBatch(false)}
        // onCancel={() => handleNewBatchModal(false)}
      >
        <>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div className="qrcode">
            <h1 className="qrcode-title text__700">
              QRCode - {currentBatch.batchCode}
            </h1>
            <QRCodeGenerator
              value={`${DNS}/batchInfo/${currentBatch.batchCode}`}
              batchCode={currentBatch.batchCode}
            />
            <a
              href={`https://thetruenest.com/batchInfo/${currentBatch.batchCode}`}
              className="qrcode-content-link"
              target="_blank"
            >
              https://thetruenest.com/batchInfo/{currentBatch.batchCode}
            </a>
          </div>
        </>
      </Modal>
    </>
  );
}

export default BatchView;
