import React, { useEffect, useState } from "react";
import "./BatchInfo.scss";
import background from "../../assets/img/batch-info/background.jpeg";
import Subscribe from "../../components/atom/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import { getBatch } from "../../services/batch.service";
import moment from "moment";
import certIcon1 from "../../assets/img/cert-icon/cert-icon-1.png";
import certIcon2 from "../../assets/img/cert-icon/cert-icon-2.png";
import certIcon3 from "../../assets/img/cert-icon/cert-icon-3.png";

function BatchInfo() {
  const location = useLocation();
  const [batchInfo, setBatchInfo] = useState();

  async function handleGetBatchInfo() {
    const currentURL = location.pathname.split("/");
    const batchCode = currentURL[currentURL.length - 1];

    if (batchCode) {
      const resData = await getBatch({ batchCode });

      if (resData.data) {
        setBatchInfo(resData.data);
      }
    }
  }

  useEffect(() => {
    handleGetBatchInfo();
  }, []);

  return (
    <div className="batch-info width-limit">
      <h1 className="batch-info-heading text text-primary">
        Batch Information
      </h1>
      {/* <img
        src={background}
        alt="batch-info-background"
        className="batch-info-background"
      /> */}
      <div className="batch-info-content">
        <h1 className="batch-info-content-heading heading-light heading-secondary heading__400">
          The True Nest
        </h1>
        <div className="batch-info-content-container">
          <ul className="batch-info-content-text text text-primary">
            <li>
              <p>Batch Code</p>
            </li>
            <li>
              <p>Product Origin</p>
            </li>
            <li>
              <p>Date Of Shipment</p>
            </li>
            <li>
              <p>Expiration Date</p>
            </li>
            <li>
              <p>Test Report</p>
            </li>
          </ul>
          <ul className="batch-info-content-info text text-primary">
            <li>
              <p>{batchInfo ? batchInfo.batch_code : ""}</p>
            </li>
            <li>
              <p>{batchInfo ? batchInfo.product_origin : ""}</p>
            </li>
            <li>
              <p>
                {batchInfo
                  ? moment(batchInfo.date_of_shipment).format("DD/MM/YYYY")
                  : ""}
              </p>
            </li>
            <li>
              <p>
                {batchInfo
                  ? moment(batchInfo.expiration_date).format("DD/MM/YYYY")
                  : ""}
              </p>
            </li>
            <li>
              <a
                href={batchInfo ? batchInfo.test_report : ""}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 cursor-pointer"
              >
                {batchInfo ? batchInfo.test_report_link_name : ""}
              </a>
            </li>
          </ul>
        </div>
        <ul className="batch-cert-brand">
          <li className="batch-cert-brand__item">
            <img src={certIcon1} className="item-image" />
          </li>
          <li className="batch-cert-brand__item">
            <img src={certIcon2} className="item-image" />
          </li>
          <li className="batch-cert-brand__item">
            <img src={certIcon3} className="item-image" />
          </li>
        </ul>
      </div>
      <div className="batch-info-footer">
        <p className="text text-secondary">
          Get 5% off instantly + monthly deals
        </p>
        <p className="batch-info-footer-content text text-tertiary">
          Enter your Email address below to be added to our mailing list and
          receive our latest promotions and discounts
        </p>
        <Subscribe size="large" buttonColor="black" />
      </div>
    </div>
  );
}

export default BatchInfo;
