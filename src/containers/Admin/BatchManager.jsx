import React, { useEffect, useState } from "react";
import "./BatchManager.scss";
import { Button, DatePicker, Dropdown, Modal, Space, Table } from "antd";
import "./BatchManager.scss";
import {
  DownloadOutlined,
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DownOutlined,
  FilterFilled,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import BatchReview from "./BatchReview";
// import BatchCreate from "./BatchCreate";
import { deleteBatch, getAllBatch } from "../../services/batch.service";
import moment from "moment";
import BatchView from "./BatchView";
import BatchEdit from "./BatchEdit";
import { toast } from "react-toastify";
import SearchFilter from "./SearchFilter";

function BatchManager() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stepBatch, setStepBatch] = useState(-1);
  const [formValues, setFormValues] = useState();
  const [tableData, setTableData] = useState([]);
  const [isModalViewBatch, setIsModalViewBatch] = useState(false);
  const [currentBatch, setCurrentBatch] = useState();
  const [isModalEditBatch, setIsModalEditBatch] = useState(false);
  const [isModalConfirmDelete, setIsModalConfirmDelete] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isModalFilter, setIsModalFilter] = useState(false);
  const [dateShipFilter, setDateShipFilter] = useState([]);
  const [dateExpFilter, setDateExpFilter] = useState([]);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const handleFetchTableData = (values) => {
    const dataSource = [];

    values.map((item, index) => {
      dataSource.push({
        key: index,
        batchCode: item.batch_code,
        productOrigin: item.product_origin,
        countryOfDestination: item.country_of_destination,
        dateOfShipment: moment(item.date_of_shipment).format("YYYY-MM-DD"),
        expirationDate: moment(item.expiration_date).format("YYYY-MM-DD"),
        testReport: item.test_report,
        testReportLinkName: item.test_report_link_name,
      });
    });

    setTableData([...dataSource]);
  };

  // Data Table
  const handleGetAllBatch = async () => {
    let values = {
      keyword: searchKeyword,
      dateShipFilter,
      dateExpFilter,
    };

    const res = await getAllBatch(values);
    if (res.status == "success") {
      handleFetchTableData(res.data);
    }
  };

  // View Batch
  const handleViewBatch = (record) => {
    setCurrentBatch(record);
    setIsModalViewBatch(true);
  };

  // Edit Batch
  const handleEditBatch = (record) => {
    setCurrentBatch(record);
    setIsModalEditBatch(true);
  };

  // Delete Batch
  const handleOpenConfirmDelete = (record) => {
    setCurrentBatch(record);
    setIsModalConfirmDelete(true);
  };

  const handleDeleteBatch = async () => {
    const res = await deleteBatch(currentBatch.batchCode);

    if (res.status == "success") {
      setIsModalConfirmDelete(false);
      handleGetAllBatch();
      toast.success(res.data);
    } else {
      toast.error(res.data);
    }
  };

  // Table columns
  const columns = [
    {
      title: "Batch Code",
      dataIndex: "batchCode",
      width: "10%",
    },
    {
      title: "Product Origin",
      dataIndex: "productOrigin",
      width: "20%",
    },
    {
      title: "Country Of Destination",
      dataIndex: "countryOfDestination",
      width: "20%",
    },
    {
      title: "Date Of Shippment",
      dataIndex: "dateOfShipment",
      width: "20%",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleViewBatch(record)}>
            <EyeOutlined /> View
          </Button>
          <Button onClick={() => handleEditBatch(record)}>
            <EditOutlined /> Edit
          </Button>
          <Button onClick={() => handleOpenConfirmDelete(record)}>
            <DeleteOutlined /> Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    handleGetAllBatch();
  }, []);

  // On Search
  const onSearch = async (e) => {
    let values = {
      keyword: e.target.value,
      dateShipFilter,
      dateExpFilter,
    };

    const res = await getAllBatch(values);
    if (res.status == "success") {
      handleFetchTableData(res.data);
    }

    setSearchKeyword(e.target.value);
  };

  // On Click Button Search
  const onClickSearch = async () => {
    // const res = await getAllBatch(searchKeyword);

    // if (res.status === "success") {
    //   handleFetchTableData(res.data);
    // }
    handleGetAllBatch();
  };

  return (
    <>
      <div className="batch-header">
        <div className="login-form--heading text-primary text__600 ">
          Batch information
        </div>
        <div>
          <Button type="primary" htmlType="submit" className="batch-export">
            <DownloadOutlined />
            Export
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="batch-add"
            onClick={() => setStepBatch(0)}
          >
            <PlusOutlined />
            New Batch
          </Button>
        </div>
      </div>
      <div className="batch-content">
        <Search
          placeholder="Search"
          enterButton={
            <div onClick={() => onClickSearch()}>
              <SearchOutlined className="mr-2" />
              Search
            </div>
          }
          suffix={
            dateShipFilter.length > 0 || dateExpFilter.length > 0 ? (
              <FilterFilled
                style={{
                  fontSize: 22,
                  cursor: "pointer",
                }}
                onClick={() => setIsModalFilter(true)}
              />
            ) : (
              <FilterOutlined
                style={{
                  fontSize: 22,
                  cursor: "pointer",
                }}
                onClick={() => setIsModalFilter(true)}
              />
            )
          }
          // onKeyDown={onSearch}
          onChange={onSearch}
          className="batch-search-bar"
        />
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Action <DownOutlined />
        </Button>
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
        />
      </div>

      {stepBatch == 0 ? (
        <BatchCreate
          setStepBatch={setStepBatch}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      ) : stepBatch == 1 ? (
        <BatchReview
          setStepBatch={setStepBatch}
          values={formValues}
          handleGetAllBatch={handleGetAllBatch}
        />
      ) : (
        ""
      )}
      {isModalViewBatch ? (
        <BatchView
          isModalViewBatch={isModalViewBatch}
          setIsModalViewBatch={setIsModalViewBatch}
          currentBatch={currentBatch}
        />
      ) : (
        ""
      )}
      {isModalEditBatch ? (
        <BatchEdit
          setIsModalEditBatch={setIsModalEditBatch}
          currentBatch={currentBatch}
          handleGetAllBatch={handleGetAllBatch}
        />
      ) : (
        ""
      )}

      {isModalFilter ? (
        <SearchFilter
          dateShipFilter={dateShipFilter}
          setDateShipFilter={setDateShipFilter}
          dateExpFilter={dateExpFilter}
          setDateExpFilter={setDateExpFilter}
          isModalFilter={isModalFilter}
          setIsModalFilter={setIsModalFilter}
          handleGetAllBatch={handleGetAllBatch}
        />
      ) : (
        ""
      )}

      {isModalConfirmDelete ? (
        <Modal
          title={`Are you sure want to delete ${currentBatch.batchCode} batch?`}
          centered
          okText="Delete"
          open={isModalConfirmDelete}
          onOk={() => handleDeleteBatch()}
          onCancel={() => setIsModalConfirmDelete(false)}
        >
          {/* <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p> */}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default BatchManager;
