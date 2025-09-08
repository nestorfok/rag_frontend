import { Button, Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const { Sider } = Layout;
const { Text } = Typography;

interface CustomizedSiderProps {
  isMobileSiderOpen?: boolean;
  onMobileSiderClose?: () => void;
}

export const CustomizedSider = ({ 
  isMobileSiderOpen = false, 
  onMobileSiderClose 
}: CustomizedSiderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true); // Auto-collapse on mobile
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      key: 'dashboard',
      // icon: <DashboardOutlined />,
      icon: <img src={'/dashboard.svg'} alt="Dashboard" className="w-[14px] h-[14px]" />,
      label: 'Dashboard',
      onClick: () => {
        navigate('/dashboard');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'chat',
      icon: <img src={'/brand-line.svg'} alt="Chat" className="w-[14px] h-[14px]" />,
      label: 'Chat',
      onClick: () => {
        navigate('/chat');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'bigSixLottery',
      icon: <img src={'/ticket.svg'} alt="Big Six Lottery" className="w-[14px] h-[14px]" />,
      label: 'Big Six Lottery',
      onClick: () => {
        navigate('/big-six-lottery');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'sportsWagering',
      icon: <img src={'/currency-dollar.svg'} alt="Sports Wagering" className="w-[14px] h-[14px]" />,
      label: 'Sports Wagering',
      onClick: () => {
        navigate('/sports-wagering');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'racecourseEntertainment',
      icon: <img src={'/balloon.svg'} alt="Racecourse Entertainment" className="w-[14px] h-[14px]" />,
      label: 'Racecourse Entertainment',
      onClick: () => {
        navigate('/racecourse-entertainment');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'membershipClub',
      icon: <img src={'/diamond.svg'} alt="Membership Club" className="w-[14px] h-[14px]" />,
      label: 'Membership Club',
      onClick: () => {
        navigate('/membership-club');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'charitiesContributions',
      icon: <img src={'/users.svg'} alt="Charities Contributions" className="w-[14px] h-[14px]" />,
      label: 'Charities Contributions',
      onClick: () => {
        navigate('/charities-contributions');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'communityContributions',
      icon: <img src={'/building-bank.svg'} alt="Community Contributions" className="w-[14px] h-[14px]" />,
      label: 'Community Contributions',
      onClick: () => {
        navigate('/community-contributions');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
    {
      key: 'settings',
      // icon: <SettingOutlined />,
      icon: <img src={'/settings.svg'} alt="Settings" className="w-[14px] h-[14px]" />,
      label: 'Settings',
      onClick: () => {
        navigate('/settings');
        if (isMobile && onMobileSiderClose) {
          onMobileSiderClose();
        }
      },
    },
  ];

  return (
    // h-screen is to make the sider height: 100vh
    // - vh stands for "viewport height"
    // - 100vh means "100% of the viewport height"
    // - viewport height is the height of the browser window visible to the user
    <Sider
      trigger={null}
      collapsible
      collapsed={isMobile ? !isMobileSiderOpen : collapsed}
      className="!bg-white border-r border-gray-200 h-screen"
      width={256}
      collapsedWidth={isMobile ? 0 : 80}
      breakpoint="md"
      style={{
        position: isMobile ? 'fixed' : 'relative', // This removes the sidebar from the normal document flow and positions it relative to the viewport, making it overlay the content instead of pushing it aside.
        zIndex: isMobile ? 1001 : 'auto', // This ensures the sidebar appears above the main content.
        height: '100vh',
        left: 0,
        transform: isMobile ? (isMobileSiderOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)', // This is used to control the position of the sidebar when it's open or closed.
      }}
    >
      <div className="flex items-center justify-around h-25">
        {!collapsed || isMobile ? (
          <img 
            src={'https://consvc.hkjc.com/-/media/Sites/JCEW/Homepage/icon/logo/hkjc-logo-tc-black.svg?rev=51af8053f5364823b724afe738492553&sc_lang=zh-HK'} 
              alt="logo" 
              className="w-30 h-25" 
            />
        ) : null}

        {!isMobile && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="!text-gray-600 hover:!text-gray-800"
          />
        )}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuFoldOutlined />}
            onClick={onMobileSiderClose}
            className="!text-gray-600 hover:!text-gray-800"
          />
        )}
      </div>

      {!collapsed || isMobile ? (
        <Text className="ml-6 !text-gray-500 !text-xs">Knowledge Hub</Text>
      ) : null}

      {/* Menu */}
      <div className="ml-1 mr-1">
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.split('/').pop() || 'dashboard']}
          items={menuItems}
          className="!border-r-0 !bg-transparent mt-4"
        />
      </div>
    </Sider>
  );
};