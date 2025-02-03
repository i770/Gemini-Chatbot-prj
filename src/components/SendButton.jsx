import React from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';

const SendButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      style={{
        backgroundColor: loading ? "#ccc" : "#4CAF50",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: loading ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        transition: "background 0.3s",
      }}
    >
      {loading ? (
        "Loading..."
      ) : (
        <FaPaperPlane style={{ fontSize: "18px", marginLeft: "5px" }} />
      )}
    </button>
  );
};

SendButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SendButton;
