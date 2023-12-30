import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./styles.css";
import { Uselogin } from "./mutate";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import PRButton from "../../common/Button/Button";

const Login = () => {
  //   const navigate = useNavigate();

  const [error, setError] = useState<string>("");

  const onFinish = (values: any) => {
    mutateLogin(values);
  };

  const { mutateLogin, isLoading } = Uselogin({
    onSuccess: () => {
      //   localStorage.setItem("detect", token);
      //   localStorage.setItem("user", JSON.stringify({ user }));
      //   navigate("/dashboard");
    },
    onError: (error: Error) => {
      console.log(error);
      setError(error.message);
      // show error message or do other stuff
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {/* <div className="illustration-wrapper"> */}
          <img
            src="https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=600"
            alt="Login"
            style={{height:'100lvh',width:'80lvw'}}
          />
        {/* </div> */}
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
            rules={[{ required: true, message: "Please input your email!" }]}
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
            <Input
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
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
