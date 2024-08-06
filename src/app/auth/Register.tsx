import { Link, useNavigate } from "@tanstack/react-router";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useState } from "react";

type FieldType = {
  username?: string;
  password: string;
  remember?: string;
  verifyPassword?: string;
  email: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, values?.email, values?.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate({ to: "/auth/login" });

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
      <Form
        className="rounded-lg w-full items-center shadow bg-white p-6 pt-8"
        size="large"
        name="trigger"
        style={{ maxWidth: 450 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout={"vertical"}
      >
        <h1 className="text-lg text-primary font-bold mb-6">
          User Registration
        </h1>

        <Form.Item
          validateTrigger="onBlur"
          label="Email"
          name="email"
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

        <Form.Item
          validateDebounce={1000}
          hasFeedback
          validateFirst
          label="Password"
          name="password"
          rules={[{ required: true, min: 8 }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
              whitespace: false,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
        <p className="text-center">
          Do you already have an account?{" "}
          <Link className="font-medium" to="/auth/login">
            Login
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
