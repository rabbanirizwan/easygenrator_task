import { Form, Input, Button, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "../styles.css";
import { Params, useRegister } from "./mutate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  sanitizeInput,
  validateEmail,
  validatePassword,
} from "../../utils/script";

const SignUp = () => {
  const navigate = useNavigate();

  const openNotification = (message: string) => {
    notification.open({
      message: "Error",
      description: message,
      icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
    });
  };

  const [error, setError] = useState<string>("");

  const onFinish = (values: Params) => {
    const sanitizedValues = {
      email: sanitizeInput(values.email),
      password: sanitizeInput(values.password),
      name: sanitizeInput(values.name),
    };
    mutateRegister(sanitizedValues);
  };

  const handleClickNavigate = () => {
    navigate("/");
  };

  const { mutateRegister, isLoading } = useRegister({
    onSuccess: ({ token }: { token: string }) => {
      navigate("/welcome");
      localStorage.setItem("m-user", token);
    },
    onError: (error: Error) => {
      console.log(error);
      openNotification(error.message);
      setError(error.message);
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-box">
      <div className="wrapper">
        <div className="illustration-wrapper"></div>
        <img
          src="https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=600"
          alt="Login"
          style={{
            height: "100vh",
            width: "70vw",
            position: "relative",
            zIndex: 2,
          }}
        />
      </div>

      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <p className="form-title">Welcome back</p>
        <p>Login to the Dashboard</p>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { validator: validateEmail },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { validator: validatePassword },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <p>{error}</p>

        <Form.Item>
          <Button
            className={`button login-form-button`}
            size="large"
            htmlType="submit"
            loading={isLoading}
            type="primary"
          >
            Sign up
          </Button>
          <p className="link" onClick={handleClickNavigate}>
            or Login
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
