import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { CheckCircleOutlined, LeftOutlined } from "@ant-design/icons";
import countryOptions from "../../data/countryOptions";
import { createBatch } from "../../services/batch.service";
import { toast } from "react-toastify";
// const QRcode = require("qrcode");
// import QRcode from "qrcode";
import "./BatchReview.scss";
import getCountryNameFromCode from "../../../../thetruenest_server/utils/getCountryNameFromCode";
import QRCodeGenerator from "../../components/atom/QRCode/QRCode";

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

// const DNS = import.meta.env.VITE_DNS;
const HOST = import.meta.env.VITE_SERVER_HOST;

function generateBatchCode(values) {
  const day = moment(values.dateOfShipment.$d).format("DD");
  const month = moment(values.dateOfShipment.$d).format("MM");

  return values.countryOfDestination + day + month;
}

function BatchReview({ setStepBatch, values, handleGetAllBatch }) {
  const [isCreated, setIsCreated] = useState(false);
  const [batchCode, setBatchCode] = useState("");

  useEffect(() => {
    setBatchCode(generateBatchCode(values));
  }, [values]);

  const data = [
    {
      key: "1",
      field: "Batch Code",
      data: batchCode,
    },
    {
      key: "2",
      field: "Product Origin",
      data: values.productOrigin,
    },
    {
      key: "3",
      field: "Country Of Destination",
      data: getCountryNameFromCode(values.countryOfDestination),
    },
    {
      key: "4",
      field: "Date of Shipment",
      data: moment(values.dateOfShipment.$d).format("DD/MM/YYYY"),
    },
    {
      key: "5",
      field: "Expiration Date",
      data: moment(values.expirationDate.$d).format("DD/MM/YYYY"),
    },
    {
      key: "6",
      field: "Test Report Link Name",
      data: values.testReportLinkName,
    },
    {
      key: "7",
      field: "Test Report",
      data: values.testReport,
    },
  ];

  const handleCreateBatch = async (values) => {
    const valuesSave = {
      batchCode: generateBatchCode(values),
      productOrigin: values.productOrigin,
      countryOfDestination: getCountryNameFromCode(values.countryOfDestination),
      dateOfShipment: moment(values.dateOfShipment.$d).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      expirationDate: moment(values.expirationDate.$d).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      testReportLinkName: values.testReportLinkName,
      testReport: values.testReport,
    };
    const res = await createBatch(valuesSave);
    if (res.status == "success") {
      setIsCreated(true);
      toast.success(res.data);
      handleGetAllBatch();
    } else {
      toast.error(res.data);
    }
  };

  return (
    <>
      <Modal
        title={
          !isCreated ? (
            <h1 className="bold text-4xl">Create Batch Information</h1>
          ) : (
            <h1 className="bold text-4xl">Batch Information</h1>
          )
        }
        centered
        className="new-batch-modal"
        open={true}
        cancelText="Close"
        footer={
          isCreated
            ? [
                <Button key="close" onClick={() => setStepBatch(-1)}>
                  Close
                </Button>,
              ]
            : [
                <Button key="close" onClick={() => setStepBatch(-1)}>
                  Close
                </Button>,
                <Button key="save" onClick={() => handleCreateBatch(values)}>
                  Save and generate QR Code
                </Button>,
              ]
        }
        onCancel={() => setStepBatch(-1)}
        // onCancel={() => handleNewBatchModal(false)}
      >
        {!isCreated ? (
          <>
            <Button onClick={() => setStepBatch(0)} className="my-2">
              <LeftOutlined /> Back
            </Button>

            <Table columns={columns} dataSource={data} pagination={false} />
          </>
        ) : (
          <>
            <div className="success-box">
              <h1>
                <CheckCircleOutlined className="mr-2" />
                Batch created successfully
              </h1>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
            <h1 className="qrcode-title text__700">QRCode - {batchCode}</h1>
            <div className="qrcode-content">
              <QRCodeGenerator
                value={`${HOST}/batchInfo/${batchCode}`}
                batchCode={batchCode}
              />
              <a
                href={`https://thetruenest.com/batchInfo/${batchCode}`}
                className="qrcode-content-link"
                target="_blank"
              >
                https://thetruenest.com/batchInfo/{batchCode}
              </a>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default BatchReview;
