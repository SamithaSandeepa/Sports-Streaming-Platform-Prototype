"use client";

import { useState } from "react";
import { CHAT_MESSAGES } from "@/lib/data";

const ChatPanel = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(CHAT_MESSAGES);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "You",
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-96">
      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto space-y-3 mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <div className="flex items-start">
              <span className="font-medium text-primary">{msg.user}</span>
              <span className="text-gray-400 text-xs ml-2">
                {msg.timestamp}
              </span>
            </div>
            <p className="text-gray-300">{msg.message}</p>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full bg-gray-800 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPanel;
