import React, { useState } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import InputForm from './InputForm';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [input, setInput] = useState(''); // Stores user input
  const [loading, setLoading] = useState(false); // Tracks loading state

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = { text: input, sender: 'user' }; // Create user message object
    setMessages((prev) => [...prev, userMessage]); // Add user message to the list
    setInput(''); // Clear input field
    setLoading(true); // Set loading state to true

    try {
      // Send request to the Gemini API
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [
            {
              role: 'user',
              parts: [{ text: input }],
            },
          ],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Extract bot's response from the API
      const botText =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm unable to respond.";
      setMessages((prev) => [...prev, { text: botText, sender: 'bot' }]); // Add bot's response
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Error fetching response.', sender: 'bot' },
      ]); // Add error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div
      style={{
        width: '60%',
        height: '50%',
        margin: '50px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#1a1a2e',
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '10px',
          color: '#ff4b5c',
        }}
      >
        Gemini Chatbot
      </h2>
      <div
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#0f0f1b',
          marginBottom: '10px',
        }}
      >
        <MessageList messages={messages} /> {/* Render chat messages */}
      </div>
      <InputForm
        input={input}
        setInput={setInput}
        loading={loading}
        onSend={handleSendMessage}
      /> {/* Render input form */}
    </div>
  );
};

export default Chatbot;