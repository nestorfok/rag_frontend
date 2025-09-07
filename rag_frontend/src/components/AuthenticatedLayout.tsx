import type { ReactNode } from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { CustomizedSider } from './general/CustomizedSider';
import { CustomizedHeader } from './general/CustomizedHeader';

const { Content } = Layout;

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileSiderOpen, setIsMobileSiderOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileSiderOpen(false); // Close mobile sider when switching to desktop
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileSiderOpen(!isMobileSiderOpen);
  };

  return (
    <>
      <Layout className="min-h-screen overflow-hidden">
        {/* Sidebar */}
        <CustomizedSider 
          isMobileSiderOpen={isMobileSiderOpen}
          onMobileSiderClose={() => setIsMobileSiderOpen(false)}
        />

        {/* Main Layout */}
        <Layout className="flex-1 min-w-0">
          <CustomizedHeader 
            username={user?.name || ''} 
            handleLogout={handleLogout}
            onMobileMenuToggle={isMobile ? handleMobileMenuToggle : undefined}
          />

          {/* Content */}
          <Content className="!p-3 sm:!p-6 !bg-gray-50 overflow-auto flex-1">
            <div className="bg-white rounded-lg shadow-sm min-h-full p-3 sm:p-6 max-w-full">
              <div className="w-full">
                {children}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* Mobile Overlay */}
      {isMobile && isMobileSiderOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-999"
          onClick={() => setIsMobileSiderOpen(false)}
        />
      )}
    </>
  );
};
