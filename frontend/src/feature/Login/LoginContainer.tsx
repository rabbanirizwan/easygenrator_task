import { Form, Input, Button, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "../styles.css";
import { Uselogin } from "./mutate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sanitizeInput, validateEmail } from "../../utils/script";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");

  const onFinish = (values: any) => {
    const sanitizedValues = {
      email: sanitizeInput(values.email),
      password: sanitizeInput(values.password),
    };
    mutateLogin(sanitizedValues);
  };

  const { mutateLogin, isLoading } = Uselogin({
    onSuccess: () => {
      navigate("/welcome");
    },
    onError: (error: Error) => {
      console.log(error);
      setError(error.message);
      openNotification(error.message);
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleClickNavigate = () => {
    navigate("/signup");
  };

  const openNotification = (message: string) => {
    notification.open({
      message: "Error",
      description: message,
      icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
    });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="wrapper">
          <div className="illustration-wrapper"></div>
          <img
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login"
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
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
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
              Login
            </Button>
            <p className="link" onClick={handleClickNavigate}>
              or sing up
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
