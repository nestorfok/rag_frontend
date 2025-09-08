import { useState, useEffect } from 'react';
import { Form, Button, Typography, message } from 'antd';
import { UserOutlined, RobotOutlined, ClockCircleOutlined, BulbOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FeatureCard } from '../../components/landingPage/FeatureCard';
import { LoginForm } from '../../components/landingPage/LoginForm';
import { FooterButton } from '../../components/landingPage/FooterButton';
import { useAuth } from '../../contexts/AuthContext';

const { Text } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

export const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (values: LoginForm) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 5000));
      await login(values.email, values.password);
      message.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      message.error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    message.info('Forgot password function not implemented yet.');
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Left Side - Purple Gradient Intro (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-6 lg:p-12 flex-col justify-center overflow-y-auto animate-initial-hidden animate-fade-in-up animate-delay-100">
        <div className="">
          {/* Logo + Welcome Text*/}
          <div className="mb-8 flex items-center justify-center animate-initial-hidden animate-scale-in animate-delay-200">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <RobotOutlined className="text-white text-2xl" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-6 flex flex-col animate-initial-hidden animate-fade-in-up animate-delay-300">
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
          <div className="space-y-4 lg:space-y-6 flex flex-col items-center justify-center">
            <FeatureCard
              icon={<UserOutlined className="!text-white text-2xl" />}
              title="Smart Conversations"
              description="Personalized responses that adapt to your communication style and needs"
              maxWidth="500px"
              animate="fade-in-up"
              animateDelay="400"
              titleColor="white"
              descriptionColor="primary-100"
            />

            <FeatureCard
              icon={<ClockCircleOutlined className="!text-white text-2xl" />}
              title="AI Intelligence"
              description="Advanced natural language processing with real-time understanding"
              maxWidth="500px"
              animate="fade-in-up"
              animateDelay="500"
              titleColor="white"
              descriptionColor="primary-100"
            /> 

            <FeatureCard
              icon={<BulbOutlined className="!text-white text-2xl" />}
              title="24/7 Availability"
              description="Always ready to assist you with instant responses and support"
              maxWidth="500px"
              animate="fade-in-up"
              animateDelay="500"
              titleColor="white"
              descriptionColor="primary-100"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 overflow-y-auto animate-initial-hidden animate-fade-in-up animate-delay-100">
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
          <h2 className="text-4xl font-semibold text-neutral-800 text-center mb-3 animate-initial-hidden animate-fade-in-up animate-delay-300">
            Log In
          </h2>

          <LoginForm loginForm={loginForm} handleLogin={handleLogin} handleForgotPassword={handleForgotPassword} isFormSubmitting={loading} />

          {/* Bottom Text */}
          <div className="text-center animate-initial-hidden animate-fade-in-up animate-delay-600">
            <Text className="text-neutral-600 text-sm">
              Don't have an account?{' '}
            </Text>
            <Button 
              type="link" 
              onClick={() => {
                message.info('Contact us for a Free Trial function not implemented yet.');
              }}
              className="!p-0 !h-auto !text-primary-600 hover:!text-primary-700 !text-sm"
            >
              Contact us for a Free Trial
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 space-y-2 animate-initial-hidden animate-fade-in-up animate-delay-700">
            <div className="flex items-center justify-center space-x-4 text-xs text-neutral-400">
              <FooterButton 
                onClick={() => {
                  message.info('Terms of Service function not implemented yet.');
                }}
                text="Terms of Service" 
              />
              <span>•</span>
              <FooterButton 
                onClick={() => {
                  message.info('Privacy Policy function not implemented yet.');
                }}
                text="Privacy Policy" 
              />
              <span>•</span>
              <FooterButton 
                onClick={() => {
                  message.info('Contact Support function not implemented yet.');
                }}
                text="Contact Support" 
              />
            </div>
            <p className="text-xs text-neutral-400">© 2025 Nestor AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};