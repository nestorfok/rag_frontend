import { Avatar } from "antd";
import { RobotOutlined } from "@ant-design/icons";

export const AILoading = () => {
  return (
    <div className="flex gap-3 mb-6">
      {/* AI Avatar */}
      <div>
        <Avatar 
          size={36}
          className={`bg-gray-600`}
          icon={<RobotOutlined />}
        />
      </div>
      
      {/* Loading Message */}
      <div className="px-4 py-3 bg-white border border-gray-200 rounded-2xl rounded-bl-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <span className="text-sm text-gray-500">Generating response...</span>
        </div>
      </div>
    </div>
  );
};