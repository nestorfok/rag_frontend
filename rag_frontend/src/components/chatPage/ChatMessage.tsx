import { Avatar } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Avatar 
          size={36}
          className={`${isUser ? 'bg-primary-500' : 'bg-gray-600'}`}
          icon={isUser ? <UserOutlined /> : <RobotOutlined />}
        />
      </div>
      
      {/* Message Content */}
      <div className={`flex flex-col max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
        {/* Message Bubble */}
        <div 
          className={`px-4 py-3 rounded-2xl break-words ${
            isUser 
              ? 'bg-primary-500 text-white rounded-br-md' 
              : 'bg-white border border-gray-200 text-gray-900 rounded-bl-md shadow-sm'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        </div>
        
        {/* Timestamp */}
        {timestamp && (
          <span className="text-xs text-gray-400 mt-1 px-2">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};
