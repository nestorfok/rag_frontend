import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { Avatar } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import { AILoading } from "./AILoading";

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
    <>
      {/* 
      h-full
      - Makes the container take up 100% of its parent's height.

      overflow-y-auto
      - Enables vertical scrolling only when needed. This provides:
        - A scrollbar when messages overflow the container
        - Clean UI by hiding the scrollbar when content fits
        - Ability to scroll through chat history
        - Contained message display without affecting the overall layout
      */}
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
          {!isLoading && (
            <AILoading />
          )}
          
          {/* Auto-scroll anchor */}
          <div ref={chatEndRef} />
        </div>
      </div>
    </>
  );
};
