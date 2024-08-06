import { Link } from "@tanstack/react-router";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <>
    <Form
      className=" rounded-lg w-full items-center shadow bg-white p-6 pt-12"
      layout="vertical"
      size="large"
      name="basic"
      style={{ maxWidth: 450 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className=" text-lg text-primary font-bold mb-6">Login</h1>

      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="mb-3">
        <Button className="w-full" type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <p className="text-center">
        Are you just getting started?{" "}
        <Link className="font-medium" to="/auth/register">
          Register
        </Link>
      </p>
    </Form>
  </>
);

export default Login;
