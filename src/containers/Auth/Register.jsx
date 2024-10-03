import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form, Input } from "antd";
import { ErrorMessage, FastField, Formik } from "formik";
import RequiredIcon from "../../../components/atom/RequiredIcon/RequiredIcon";
import { createOTP, register } from "../../../services/auth.service";
import ActiveAccount from "./ActiveAccount";
import { SET_MESSAGE } from "../../../actions/types";
import { toast } from "react-toastify";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, "Name can not be longer than 40 characters")
    .required("Name can not be null"),
  badgeId: Yup.number()
    .typeError("BadgeId must be a number")
    .test(
      "len",
      "Must be exactly 6 numbers",
      (val) => val.toString().length === 6
    )
    .required("Badge ID can not be null"),
  email: Yup.string()
    .email("Not a valid email")
    .max(40, "Email can not be longer than 40 characters")
    .required("Email can not be null"),
  projectName: Yup.string()
    .required("Project name can not be null")
    .max(40, "Project name can not be longer than 40 characters"),
  password: Yup.string()
    .required("Password can not be null")
    .test(
      "len",
      "Password must have at least 8 characters",
      (val) => val.toString().length >= 8
    ),
  confirmPassword: Yup.string()
    .required("Password can not be null")
    .oneOf([Yup.ref("password"), null], "Password confirm does not match"),
});

const cl = classNames.bind(styles);

function Register(props) {
  const { handleButtonTypeClick } = props;

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const res = await register(values);

    if (res.status === "success") {
      dispatch({
        type: SET_MESSAGE,
        payload: "",
      });
      toast.success("Account created. Please log in");
      handleButtonTypeClick("login");
    } else if (res.status === "fail") {
      const message = res.message;

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

  function handleKeyUp(event, values) {
    // Enter
    if (event.keyCode === 13) {
      handleSubmit(values);
    }
  }

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          projectName: "",
          badgeId: "",
          password: "",
        }}
        onSubmit={(values, { setFieldError }) =>
          handleSubmit(values, setFieldError)
        }
        validationSchema={RegisterSchema}
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
          <div>
            <div>
              <button
                className="text-lg mb-2"
                onClick={() => handleButtonTypeClick("getStarted")}
              >
                <i className="fa-solid fa-chevron-left mr-1"></i>
                Back
              </button>
              <Form
                onSubmit={handleSubmit}
                onKeyUp={(event) => handleKeyUp(event, values)}
              >
                <div className="text-5xl font-bold text-center">Sign up</div>
                <div className="mt-8">
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="badgeId">
                      Badge ID: <RequiredIcon />
                    </label>
                    <FastField
                      name="badgeId"
                      id="badgeId"
                      component={Input}
                      value={values.badgeId}
                      status={
                        errors?.badgeId && touched?.badgeId ? "error" : ""
                      }
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="badgeId"
                    ></ErrorMessage>
                  </div>
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="name">
                      Name: <RequiredIcon />
                    </label>
                    <FastField
                      name="name"
                      id="name"
                      component={Input}
                      value={values.name}
                      status={errors?.name && touched?.name ? "error" : ""}
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="name"
                    ></ErrorMessage>
                  </div>
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="name">
                      Email: <RequiredIcon />
                    </label>
                    <FastField
                      name="email"
                      id="email"
                      component={Input}
                      value={values.email}
                      status={errors?.email && touched?.email ? "error" : ""}
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="email"
                    ></ErrorMessage>
                  </div>
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="name">
                      Project Name: <RequiredIcon />
                    </label>
                    <FastField
                      name="projectName"
                      id="projectName"
                      component={Input}
                      value={values.projectName}
                      status={
                        errors?.projectName && touched?.projectName
                          ? "error"
                          : ""
                      }
                      placeHolder="ex: AxS iSea, Open, ICON,..."
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="projectName"
                    ></ErrorMessage>
                  </div>
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="name">
                      Password: <RequiredIcon />
                    </label>
                    <FastField
                      name="password"
                      id="password"
                      type="password"
                      component={Input}
                      value={values.password}
                      status={
                        errors?.password && touched?.password ? "error" : ""
                      }
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="password"
                    ></ErrorMessage>
                  </div>
                  <div className={cl("row-group")}>
                    <label className={cl("label")} htmlFor="name">
                      Confirm Password: <RequiredIcon />
                    </label>
                    <FastField
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      component={Input}
                      value={values.confirmPassword}
                      status={
                        errors?.confirmPassword && touched?.confirmPassword
                          ? "error"
                          : ""
                      }
                      className={cl("input")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error max-w-[321px] text-red-500"
                      component="div"
                      name="confirmPassword"
                    ></ErrorMessage>
                  </div>
                  {message ? (
                    <div
                      className="error-msg"
                      role="alert"
                      style={{
                        color: "red",
                        fontSize: 14,
                        marginBottom: "10px",
                      }}
                    >
                      {message}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className={cl("footer")}>
                    <Button
                      type="primary"
                      onClick={handleSubmit}
                      htmlType="submit"
                      style={{ backgroundColor: "#ffba22", width: "200px" }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Register;
