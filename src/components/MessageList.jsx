import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        height: "400px",
        overflowY: "auto",
        backgroundColor: "#1a1a2e",
        borderRadius: "10px",
        border: "1px solid #333"
      }}
    >
      {messages.map((msg, index) => (
        <Message
          key={index}
          text={msg.text}
          sender={msg.sender}
        />
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
