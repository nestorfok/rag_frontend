import { useState } from "react";
import { SuggestionCard } from "../../components/chatPage/SuggestionCard";
import { InputForm } from "../../components/chatPage/InputForm";
import { ChatContainer, type Message } from "../../components/chatPage/ChatContainer";

export const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to add a new message
  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Function to handle sending messages
  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    // Add user message
    addMessage(messageContent, true);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponses = [
        "I'd be happy to help you with that! Let me provide you with the information you're looking for.",
        "That's a great question! Here's what I can tell you about that topic.",
        "I understand what you're asking. Let me break this down for you.",
        "Thanks for your question! Based on the API documentation, here's what you need to know.",
        "I can help you with that. Let me provide you with a comprehensive answer."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      addMessage(randomResponse, false);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  // Function to handle suggestion clicks
  const handleSuggestionClick = (suggestionText: string) => {
    setInput(suggestionText);
    handleSendMessage(suggestionText);
  };

  return (
    <div className="flex flex-col h-full gap-5">
      {/* Chat Container - Takes remaining space and scrolls independently */}
      {/* 
      flex-1 
      - Makes the container expand to fill all available space in its parent flex container. 
      - This ensures the chat area takes up the maximum available vertical space while allowing other elements (like headers or input areas) to maintain their size.
      - This is the reason when inputBox is in the bottom.
      
      overflow-hidden
      - Prevents any content from spilling outside the container's boundaries. This is particularly important in a chat interface where:
        - Messages can be of varying lengths
        - Content is dynamically loaded
        - Animations are present (like the fade-in animations in your code)
      */}
      <div className="flex-1 overflow-hidden">
        {messages.length === 0 ? (
          /* Empty state with suggestions */
          <div className="h-full flex flex-col">
            {/* Empty state message */}
            <div className="flex-1 flex items-center justify-center animate-initial-hidden animate-fade-in-up animate-delay-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Start a conversation</h3>
              </div>
            </div>
            
            {/* Input Suggestions Container */}
            <div className="flex-shrink-0 pb-6 animate-initial-hidden animate-fade-in-up animate-delay-300">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Get started with these suggestions</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Suggestion 1 */}
                  <SuggestionCard
                    title="Show me all available APIs"
                    description="Get a complete overview of all endpoints"
                    icon={<img src={'/clipboard-text.svg'} alt="API Icon" className="w-4 h-4" />}
                    iconBackgroundColor="bg-primary-100"
                    onClick={() => handleSuggestionClick("Show me all available APIs")}
                  />

                  {/* Suggestion 2 */}
                  <SuggestionCard
                    title="Profile API parameters"
                    description="Learn about required and optional fields"
                    icon={<img src={'/user.svg'} alt="API Icon" className="w-4 h-4" />}
                    iconBackgroundColor="bg-secondary-100"
                    onClick={() => handleSuggestionClick("What parameters does the Profile API accept?")}
                  />

                  {/* Suggestion 3 */}
                  <SuggestionCard
                    title="API responses guide"
                    description="Understand response formats and descriptions"
                    icon={<img src={'/help-square-rounded.svg'} alt="API Icon" className="w-4 h-4" />}
                    iconBackgroundColor="bg-success-100"
                    onClick={() => handleSuggestionClick("List all API responses and their descriptions")}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Chat messages */
          <ChatContainer messages={messages} isLoading={isLoading} />
        )}
      </div>
      
      {/* Input Container - Fixed at bottom */}
      <div className="flex-shrink-0 animate-initial-hidden animate-fade-in-up animate-delay-400">
        <InputForm input={input} setInput={setInput} handleSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

