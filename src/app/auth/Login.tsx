/* eslint-disable react-refresh/only-export-components */
import { Link } from "@tanstack/react-router";
import type { FormProps } from "antd";
import { Button, Form, Input, App } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth as authFirebase } from "../../Firebase";
import { useState } from "react";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(authFirebase, values?.email, values?.password)
      .then((userCredential) => {
        message.success("Welcome!");
        const user = userCredential.user;
        localStorage.setItem("access_token", user?.accessToken);
      })
      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <Form
          className=" rounded-lg w-full items-center shadow-lg bg-white p-6 pt-12"
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
            label="Email"
            name="email"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            validateTrigger="onBlur"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="mb-3">
            <Button
              loading={loading}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
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
      </div>
    </>
  );
};

const login = () => (
  <>
    <Login />
  </>
);

export default login;
