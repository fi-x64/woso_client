import React, { useEffect, useState } from "react";
// import "./BatchCreate.scss";
import { DatePicker, Input, Modal, Select } from "antd";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import RequiredIcon from "../../components/atom/RequiredIcon/RequiredIcon";

// Batch  Schema
const BatchSchema = Yup.object().shape({
  productOrigin: Yup.string().required("Product Origin can not be null"),
  countryOfDestination: Yup.string().required(
    "Country Of Destination can not be null"
  ),
  dateOfShipment: Yup.string().required("Date Of Shippment can not be null"),
  expirationDate: Yup.string().required("Expiration Date can not be null"),
  testReportLinkName: Yup.string().required(
    "Test Report Link Name can not be null"
  ),
  testReport: Yup.string()
    .matches(/^(https?:\/\/)[^\s/$.?#].[^\s]*$/i, "Enter correct url")
    .required("Test Report can not be null"),
});

function BatchCreate({ setStepBatch, formValues, setFormValues }) {
  function handleKeyUp(event, values) {
    // Enter
    if (event.keyCode === 13) {
      handleSubmit(values);
    }
  }

  const handleSubmit = (values) => {
    setStepBatch(1);
    setFormValues(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          productOrigin: formValues?.productOrigin
            ? formValues.productOrigin
            : "",
          countryOfDestination: formValues?.countryOfDestination
            ? formValues.countryOfDestination
            : "",
          dateOfShipment: formValues?.dateOfShipment
            ? formValues.dateOfShipment
            : "",
          expirationDate: formValues?.expirationDate
            ? formValues.expirationDate
            : "",
          testReport: formValues?.testReport ? formValues.testReport : "",
          testReportLinkName: formValues?.testReportLinkName
            ? formValues.testReportLinkName
            : "",
        }}
        onSubmit={(values, { setFieldError }) =>
          handleSubmit(values, setFieldError)
        }
        validationSchema={BatchSchema}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Modal
            title={<h1 className="bold text-4xl">Create Batch Information</h1>}
            className="new-batch-modal"
            open={true}
            onOk={handleSubmit}
            okText="Next"
            cancelText="Close"
            onCancel={() => {
              setStepBatch(-1);
              setFormValues("");
            }}
          >
            <Form
              onSubmit={handleSubmit}
              onKeyUp={(event) => handleKeyUp(event, values)}
            >
              <div className="batch-modal-form">
                <div>
                  <label htmlFor="productOrigin">
                    Product Origin <RequiredIcon />
                  </label>
                  <FastField
                    className="block"
                    name="productOrigin"
                    id="productOrigin"
                    component={Input}
                    value={values.productOrigin}
                    status={
                      errors?.productOrigin && touched?.productOrigin
                        ? "error"
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></FastField>
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="productOrigin"
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor="countryOfDestination">
                    Country Of Destination <RequiredIcon />
                  </label>
                  <Select
                    name="countryOfDestination"
                    id="countryOfDestination"
                    style={{ width: "100%" }}
                    status={
                      errors?.countryOfDestination &&
                      touched?.countryOfDestination
                        ? "error"
                        : ""
                    }
                    value={values.countryOfDestination}
                    onChange={(value) => {
                      setFieldValue(`countryOfDestination`, value);
                    }}
                    optionLabelProp="label"
                    allowClear={false}
                  >
                    {countryOptions.map((value, index) => {
                      return (
                        <Select.Option
                          value={value.code}
                          label={value.name}
                          key={value.id}
                        >
                          {value.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="countryOfDestination"
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor="dateOfShipment">
                    Date Of Shipment <RequiredIcon />
                  </label>
                  <DatePicker
                    className="block"
                    name="dateOfShipment"
                    id="dateOfShipment"
                    onChange={(dates, dateStrings) => {
                      if (dates) {
                        setFieldValue(`dateOfShipment`, dates);
                      }
                    }}
                    value={values.dateOfShipment}
                    // onBlur={handleBlur}
                    status={
                      errors?.dateOfShipment && touched?.dateOfShipment
                        ? "error"
                        : ""
                    }
                    allowClear={false}
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="dateOfShipment"
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor="expirationDate">
                    Expiration Date <RequiredIcon />
                  </label>
                  <DatePicker
                    className="block"
                    name="expirationDate"
                    id="expirationDate"
                    onChange={(dates, dateStrings) => {
                      if (dates) {
                        setFieldValue(`expirationDate`, dates);
                      }
                    }}
                    onBlur={() => handleBlur}
                    value={values.expirationDate}
                    status={
                      errors?.expirationDate && touched?.expirationDate
                        ? "error"
                        : ""
                    }
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="expirationDate"
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor="testReport">
                    Test Report Link <RequiredIcon />
                  </label>
                  <FastField
                    className="block"
                    name="testReport"
                    id="testReport"
                    component={Input}
                    placeholder="https://example.com"
                    value={values.testReport}
                    status={
                      errors?.testReport && touched?.testReport ? "error" : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></FastField>
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="testReport"
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor="testReportLinkName">
                    Test Report Link Name <RequiredIcon />
                  </label>
                  <FastField
                    className="block"
                    name="testReportLinkName"
                    id="testReportLinkName"
                    component={Input}
                    value={values.testReportLinkName}
                    status={
                      errors?.testReportLinkName && touched?.testReportLinkName
                        ? "error"
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></FastField>
                  <ErrorMessage
                    className="field-error text-red-500"
                    component="div"
                    name="testReportLinkName"
                  ></ErrorMessage>
                </div>
              </div>
            </Form>
          </Modal>
        )}
      </Formik>
    </>
  );
}

export default BatchCreate;
