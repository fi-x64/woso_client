import { Input } from "antd";
import React, { useState } from "react";
import { LockOutlined } from "@ant-design/icons";

function InputPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Input.Password
      placeholder="Please input your password"
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
      prefix={<LockOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
    />
  );
}

export default InputPassword;
