import React from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';

const InputForm = ({ input, setInput, loading, onSend }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderTop: "1px solid #444",
        backgroundColor: "#0f0f1b",
        borderRadius: "8px"
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={loading}
        style={{
          flexGrow: 1,
          padding: "12px",
          borderRadius: "6px",
          border: "1px solid #555",
          backgroundColor: "#222",
          color: "white",
          fontSize: "16px",
          outline: "none"
        }}
      />
      <SendButton loading={loading} />
    </form>
  );
};

InputForm.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default InputForm;
