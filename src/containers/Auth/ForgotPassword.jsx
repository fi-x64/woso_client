import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form, Input } from "antd";
import { ErrorMessage, FastField, Formik } from "formik";
import { toast } from "react-toastify";
import { activeAccount, forgotPassword } from "../../services/auth.service";
import nestLogin from "../../assets/img/nest-login.png";
import RequiredIcon from "../../components/atom/RequiredIcon/RequiredIcon";
import { MailOutlined } from "@ant-design/icons";
import "./ForgotPassword.scss";

const ActiveSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});

function ForgotPassword({ email }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const navigate = useNavigate();
  const [nextPage, setNextPage] = useState(false);

  const handleSubmit = async (values) => {
    const res = await forgotPassword(values.email);

    if (res.status === "success") {
      toast.success("Một email kèm link xác thực vừa được gửi đến email");
      setNextPage(true);
      setCheckSuccess(true);
    } else if (res.status === "error") {
      toast.error(res.message);
    }
  };

  function handleKeyUp(event, values) {
    // Enter
    if (event.keyCode === 13) {
      handleSubmit(values);
    }
  }

  return (
    <>
      <h1 className="text-welcome text-primary text__600">
        Welcome back, Admin
      </h1>
      <div className="login">
        <img src={nestLogin} alt="" className="login-image" />
        {!nextPage ? (
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values, { setFieldError }) =>
              handleSubmit(values, setFieldError)
            }
            validationSchema={ActiveSchema}
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
                    Forgot Password
                  </div>
                  <div className="text-tertiary text__400">
                    Enter the email address you used when you joined and we’ll
                    send you instruction to reset your password
                  </div>
                  <div className="login-content">
                    <RequiredIcon />
                    <label htmlFor="name" className="ml-2 login-content__label">
                      Email:
                    </label>
                    <FastField
                      name="email"
                      id="email"
                      component={() => (
                        <Input
                          placeholder="Please input your email"
                          prefix={
                            <MailOutlined
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
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
                    <Button
                      type="primary"
                      onClick={handleSubmit}
                      htmlType="submit"
                      className="login-button"
                    >
                      Continue
                    </Button>
                    <Link to="/login">
                      <Button type="primary" className="back-login-button">
                        Back to login
                      </Button>
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="text-2xl text-center text-green-600 [&>*]:mb-3">
            <h1 className="font-semibsold">
              Email đã được gửi. Vui lòng kiểm tra hộp thư của bạn
            </h1>
            <hr />
            <i className="fa-regular fa-circle-check text-5xl"></i>
          </div>
        )}
      </div>
    </>
  );
}

export default ForgotPassword;
