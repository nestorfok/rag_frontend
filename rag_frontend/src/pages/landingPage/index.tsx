import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone, RobotOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

export const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();

  const handleLogin = async (values: LoginForm) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Login successful!');
      console.log('Login:', values);
    } catch (error) {
      message.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Side - Purple Gradient Intro (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 flex-col justify-center animate-initial-hidden animate-fade-in-up animate-delay-100">
        <div className="">
          {/* Logo + Welcome Text*/}
          <div className="mb-8 flex items-center justify-center animate-initial-hidden animate-scale-in animate-delay-200">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <RobotOutlined className="text-white text-2xl" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-12 flex flex-col items-center justify-center animate-initial-hidden animate-fade-in-up animate-delay-300">
            <h1 className="text-5xl font-bold text-white mb-4 text-center">
              Welcome to
              <br />
              Nestor AI
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed text-center">
              Revolutionizing conversations with AI-powered intelligent assistance
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 flex flex-col items-center justify-center">
            <div className="max-w-[500px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-initial-hidden animate-fade-in-up animate-delay-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Smart Conversations</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    Personalized responses that adapt to your communication style and needs
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[500px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-initial-hidden animate-fade-in-up animate-delay-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Intelligence</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    Advanced natural language processing with real-time understanding
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[500px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-initial-hidden animate-fade-in-up animate-delay-600">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    Always ready to assist you with instant responses and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 animate-initial-hidden animate-fade-in-up animate-delay-100">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8 animate-initial-hidden animate-fade-in-up animate-delay-200">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <RobotOutlined className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">Welcome to Nestor AI</h2>
            <p className="text-neutral-600">Your Intelligent Assistant</p>
          </div>

          {/* Login Form */}
          <div className="mb-8 flex flex-col items-center justify-center animate-initial-hidden animate-fade-in-up animate-delay-300">
            <h2 className="text-4xl font-semibold text-neutral-800 mb-2">Log in</h2>
            <p className="text-neutral-600">Enter your credentials</p>
          </div>

          <Form
            form={loginForm}
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
                prefix={<MailOutlined className="text-neutral-400" />}
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
                prefix={<LockOutlined className="text-neutral-400" />}
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
              <Button type="link" className="!p-0 !h-auto text-primary-600 hover:text-primary-700 text-sm">
                Forgot password?
              </Button>
            </div>

            <Form.Item className="mb-6">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>

          {/* Bottom Text */}
          <div className="text-center animate-initial-hidden animate-fade-in-up animate-delay-600">
            <Text className="text-neutral-600 text-sm">
              Don't have an account?{' '}
            </Text>
            <Button 
              type="link" 
              onClick={() => {
                message.info('Contact us for a Free Trial');
              }}
              className="!p-0 !h-auto text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Contact us for a Free Trial
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 space-y-2 animate-initial-hidden animate-fade-in-up animate-delay-700">
            <div className="flex items-center justify-center space-x-4 text-xs text-neutral-400">
              <span>Terms of Service</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Contact Support</span>
            </div>
            <p className="text-xs text-neutral-400">© 2025 Nestor AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};