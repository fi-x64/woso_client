import { Button, DatePicker, Modal, Table } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./SearchFilter.scss";
const { RangePicker } = DatePicker;

function SearchFilter({
  dateShipFilter,
  setDateShipFilter,
  dateExpFilter,
  setDateExpFilter,
  isModalFilter,
  setIsModalFilter,
  handleGetAllBatch,
}) {
  const onChangeDateShip = (dates) => {
    if (dates)
      setDateShipFilter([
        moment(dates[0].$d).format("YYYY-MM-DD HH:mm:ss"),
        moment(dates[1].$d).format("YYYY-MM-DD HH:mm:ss"),
      ]);
    else setDateShipFilter([]);
  };

  const onChangeDateExp = (dates) => {
    if (dates)
      setDateExpFilter([
        moment(dates[0].$d).format("YYYY-MM-DD HH:mm:ss"),
        moment(dates[1].$d).format("YYYY-MM-DD HH:mm:ss"),
      ]);
    else setDateExpFilter([]);
  };

  const handleApply = () => {
    handleGetAllBatch();
    setIsModalFilter(false);
  };

  return (
    <>
      <Modal
        title={<h1 className="bold text-4xl">Filter</h1>}
        open={isModalFilter}
        onCancel={() => setIsModalFilter(false)}
        footer={[
          <Button
            key="close"
            onClick={() => {
              setDateShipFilter([]);
              setDateExpFilter([]);
            }}
          >
            Clear
          </Button>,
          <Button type="primary" key="save" onClick={handleApply}>
            Apply
          </Button>,
        ]}
      >
        <div className="search-filter">
          <div>
            <p>Date of Shipment</p>
            <RangePicker
              allowClear
              onChange={onChangeDateShip}
              style={{
                width: "100%",
              }}
              value={[
                dateShipFilter[0] ? dayjs(dateShipFilter[0]) : null,
                dateShipFilter[1] ? dayjs(dateShipFilter[1]) : null,
              ]}
            />
          </div>
          <div>
            <p>Expiration Date</p>
            <RangePicker
              allowClear
              onChange={onChangeDateExp}
              style={{
                width: "100%",
              }}
              value={[
                dateExpFilter[0] ? dayjs(dateExpFilter[0]) : null,
                dateExpFilter[1] ? dayjs(dateExpFilter[1]) : null,
              ]}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SearchFilter;
