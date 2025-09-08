import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { Avatar } from "antd";
import { RobotOutlined } from "@ant-design/icons";

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatContainerProps {
  messages: Message[];
  isLoading?: boolean;
}

export const ChatContainer = ({ messages, isLoading }: ChatContainerProps) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added or loading state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3 mb-6">
            {/* AI Avatar */}
            <div className="flex-shrink-0">
              <Avatar 
                size={36}
                className={`bg-gray-600`}
                icon={<RobotOutlined />}
              />
            </div>
            
            {/* Loading Message */}
            <div className="flex flex-col items-start">
              <div className="px-4 py-3 bg-white border border-gray-200 rounded-2xl rounded-bl-md shadow-sm">
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
          </div>
        )}
        
        {/* Auto-scroll anchor */}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};
