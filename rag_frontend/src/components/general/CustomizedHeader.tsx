import { Avatar, Dropdown, message, Space, Button } from "antd"
import { LogoutOutlined, RobotOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons"

import {Layout,Typography} from "antd"

const { Header } = Layout;
const { Text } = Typography;

interface CustomizedHeaderProps {
  username: string;
  handleLogout: () => void;
  onMobileMenuToggle?: () => void;
}

export const CustomizedHeader = ({ username, handleLogout, onMobileMenuToggle }: CustomizedHeaderProps) => {
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => {
        // TODO: Navigate to profile page when implemented
        message.info('Profile not implemented yet.');
        console.log('Navigate to profile');
      },
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },  
  ];
  
  return (
    <Header className="!bg-white !px-3 sm:!px-6 border-b border-gray-200 flex items-center justify-between min-h-16">
      <div className="flex items-center min-w-0 flex-1">
        {/* Mobile Menu Button */}
        {onMobileMenuToggle && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={onMobileMenuToggle}
            className="!text-gray-600 hover:!text-gray-800 mr-2 sm:hidden"
            size="large"
          />
        )}
        
        <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <RobotOutlined className="!text-white text-sm sm:text-lg" />
          </div>
          <Text className="text-base sm:text-lg font-semibold text-gray-800 truncate">Nestor AI</Text>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Space className="!hidden sm:!flex">
          <Text className="text-gray-600 text-sm">Welcome back,</Text>
          <Text className="font-medium text-gray-800 text-sm truncate">{username}</Text>
        </Space>
        
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Avatar
            className="cursor-pointer bg-primary-600"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
};