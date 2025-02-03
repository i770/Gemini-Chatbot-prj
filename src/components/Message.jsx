import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, sender }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "12px",
          borderRadius: "10px",
          backgroundColor: sender === "user" ? "#4a90e2" : "#2c2c54",
          color: "white",
          fontSize: "16px",
          textAlign: "left",
          wordWrap: "break-word",
        }}
      >
        <b>{sender === 'user' ? 'You: ' : 'Gemini: '}</b>
        {text}
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.oneOf(['user', 'bot']).isRequired,
};

export default Message;
