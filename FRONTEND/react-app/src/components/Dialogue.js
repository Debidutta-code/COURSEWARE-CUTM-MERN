import React from 'react';
import './Dialogue.css';

const Dialogue = ({ message, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
