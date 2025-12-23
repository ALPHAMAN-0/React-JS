import React, { useState, useRef, useEffect } from 'react';

// System prompt / Chat Rules - Customize how the AI behaves
const SYSTEM_PROMPT = `You are the AI assistant for "MyApp" - a React text utility application. 

## About MyApp:
MyApp is a text manipulation and utility app with these features:
- **Text Converter**: Convert text to uppercase, capitalize words
- **QR Code Generator**: Generate QR codes from any text (go to QR Generator page)
- **Dark/Light Mode**: Toggle between moon (dark) and sun (light) themes

## Your Role:
- Help users understand and use the app's features
- Guide users on how to use text conversion tools
- Explain how to generate QR codes
- Answer questions about the app

## How to respond:
- When user asks "what can you do?" - explain the app features listed above
- When user asks about text - guide them to enter text in the textarea and click "Convert to Uppercase"
- When user asks about QR codes - tell them to go to "QR Generator" in the navigation menu
- When user asks about dark mode - explain they can click the moon/sun toggle button in the navbar
- Be friendly and helpful 😊
- Keep responses short and focused on the app
`;

function ChatBox({ isOpen, onClose, isDark }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm MyApp AI. How can I help you today? 😊", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([
    // Initialize with system prompt
    { role: "system", content: SYSTEM_PROMPT }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendToAI = async (userText) => {
    const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

    // Build messages array with conversation history (includes system prompt)
    const apiMessages = [
      ...conversationHistory,
      { role: "user", content: userText }
    ];

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "React Chat App"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-chat",
          "messages": apiMessages
        })
      });

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error.message || "API Error");
      }

      const assistantMessage = result.choices[0].message;

      // Update conversation history
      setConversationHistory([
        ...apiMessages,
        { role: "assistant", content: assistantMessage.content }
      ]);

      return assistantMessage.content;
    } catch (error) {
      console.error("API Error:", error);
      return `Sorry, I encountered an error: ${error.message}`;
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;

    const userText = inputText;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: userText,
      sender: "user"
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Get AI response
    const aiResponse = await sendToAI(userText);

    // Add bot message
    const botMessage = {
      id: messages.length + 2,
      text: aiResponse,
      sender: "bot"
    };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`chat-box ${isDark ? 'chat-dark' : 'chat-light'}`}>
      {/* Header */}
      <div className="chat-header">
        <div className="chat-title">
          <i className="fa-solid fa-robot"></i>
          <span>MyApp AI</span>
        </div>
        <button className="chat-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="bot-avatar">
                <i className="fa-solid fa-robot"></i>
              </div>
            )}
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <div className="bot-avatar">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div className="message-bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>
          <i className={`fa-solid ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
