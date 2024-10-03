import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Checkbox, Form, Input } from "antd";
import { ErrorMessage, FastField, Formik } from "formik";
import nestLogin from "../../assets/img/nest-login.png";
import "./Login.scss";
import RequiredIcon from "../../components/atom/RequiredIcon/RequiredIcon";
import InputPassword from "../../components/atom/InputPassword/InputPassword";
import { MailOutlined } from "@ant-design/icons";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Not a valid email")
    .max(40, "Email can not be longer than 40 characters")
    .required("Email can not be null"),
  password: Yup.string()
    .required("Invalid email or password")
    .min(8, "Password must have at least 8 characters")
    .required("Password can not be null"),
});

function Login() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    dispatch(login(values.email, values.password)).then(() => {
      navigate("/dashboard");
    });
  };

  function handleKeyUp(event, values) {
    // Enter
    if (event.keyCode === 13) {
      handleSubmit(values);
    }
  }

  // Checkbox
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  if (isLoggedIn && user.data.role.name == "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <div className="login-container">
        <h1 className="text-welcome text-primary text__600">
          Welcome back, Admin
        </h1>
        <div className="login">
          <img src={nestLogin} alt="" className="login-image" />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { setFieldError }) =>
              handleSubmit(values, setFieldError)
            }
            validationSchema={LoginSchema}
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
              <Form
                onSubmit={handleSubmit}
                onKeyUp={(event) => handleKeyUp(event, values)}
              >
                <div className="login-form">
                  <div className="login-form--heading text-primary text__600">
                    Sign In
                  </div>
                  <div className="login-form--subheading text-tertiary text__400">
                    Sign in to access your account
                  </div>
                  <div className="login-content">
                    <RequiredIcon />
                    <label htmlFor="name" className="ml-2 login-content__label">
                      Email:
                    </label>
                    <FastField
                      name="email"
                      id="email"
                      // component={() => (
                      //   <Input
                      //     placeholder="Please input your email"
                      //     prefix={
                      //       <MailOutlined
                      //         style={{ color: "rgba(0,0,0,.25)" }}
                      //       />
                      //     }
                      //   />
                      // )}
                      component={Input}
                      value={values.email}
                      status={errors?.email && touched?.email ? "error" : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error text-red-500"
                      component="div"
                      name="email"
                    ></ErrorMessage>
                  </div>
                  <div>
                    <RequiredIcon />
                    <label htmlFor="name" className="ml-2 login-content__label">
                      Password:
                    </label>
                    <FastField
                      name="password"
                      id="password"
                      type="password"
                      // component={InputPassword}
                      component={Input}
                      value={values.password}
                      status={
                        errors?.password && touched?.password ? "error" : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></FastField>
                    <ErrorMessage
                      className="field-error text-red-500"
                      component="div"
                      name="password"
                    ></ErrorMessage>
                  </div>
                  <div className="flex justify-between">
                    <Link to="/forgotPassword" className="block text-blue-600">
                      Forgot password?
                    </Link>
                  </div>
                  {message ? (
                    <div
                      className="error-msg"
                      role="alert"
                      style={{ color: "red" }}
                    >
                      {message}
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <Button
                      type="primary"
                      onClick={handleSubmit}
                      htmlType="submit"
                      className="login-button"
                    >
                      Sign In
                    </Button>
                    {/* <div className="block">
                      <Link
                        to="/forgotPassword"
                        className="block text-blue-600"
                      >
                        Forgot password?
                      </Link>
                    </div> */}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
