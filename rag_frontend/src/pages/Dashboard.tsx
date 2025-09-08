import { Typography, Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, MessageOutlined, ClockCircleOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Dashboard = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="mb-6">
        <Title level={2} className="!mb-2">Dashboard</Title>
        <Paragraph className="text-gray-600">
          Welcome to your Nestor AI dashboard. Here's an overview of your activity.
        </Paragraph>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[12, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Conversations"
              value={42}
              prefix={<MessageOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Sessions"
              value={3}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Hours Saved"
              value={24.5}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#faad14' }}
              suffix="hrs"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Efficiency Score"
              value={98.2}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#722ed1' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Recent Conversations" className="h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Project Planning Discussion</div>
                  <div className="text-sm text-gray-500">2 hours ago</div>
                </div>
                <div className="text-sm text-blue-600">Active</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Code Review Session</div>
                  <div className="text-sm text-gray-500">5 hours ago</div>
                </div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Data Analysis Help</div>
                  <div className="text-sm text-gray-500">1 day ago</div>
                </div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Quick Actions" className="h-full">
            <div className="space-y-3">
              <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="font-medium text-blue-700">Start New Conversation</div>
                <div className="text-sm text-blue-600">Begin a new AI session</div>
              </button>
              <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="font-medium text-green-700">View Analytics</div>
                <div className="text-sm text-green-600">Check your usage stats</div>
              </button>
              <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="font-medium text-purple-700">Manage Settings</div>
                <div className="text-sm text-purple-600">Customize your experience</div>
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
