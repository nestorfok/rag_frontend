import { Button, Form, Input, type FormInstance } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

interface LoginFormProps {
  loginForm: FormInstance;
  handleLogin: (values: any) => void;
  handleForgotPassword: () => void;
  isFormSubmitting: boolean;
}

export const LoginForm = ({ loginForm, handleLogin, handleForgotPassword, isFormSubmitting }: LoginFormProps) => {
  return (
    <Form
      form={loginForm}
      disabled={isFormSubmitting}
      name="login"
      onFinish={handleLogin}
      layout="vertical"
      size="large"
      className="animate-initial-hidden animate-fade-in-up animate-delay-400"
    >
      <Form.Item
        name="email"
        label={<span className="text-neutral-700 font-medium">Email</span>}
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input
          placeholder="Enter your email"
          className="h-12 rounded-lg border-neutral-200 hover:border-primary-400 focus:border-primary-500 focus-within:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label={<span className="text-neutral-700 font-medium">Password</span>}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          placeholder="Enter your password"
          className="h-12 rounded-lg border-neutral-200 hover:border-primary-400 focus:border-primary-500 focus-within:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500" />
          <span className="ml-2 text-sm text-neutral-600">Remember me</span>
        </label>
        <Button 
          type="link" 
          className="!p-0 !h-auto !text-primary-600 hover:!text-primary-700 !text-sm"
          onClick={handleForgotPassword}
        >
          Forgot password?
        </Button>
      </div>

      <Form.Item className="mb-6">
        <Button
          type="primary"
          htmlType="submit"
          loading={isFormSubmitting}
          className="w-full h-12 !bg-primary-600 hover:!bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};