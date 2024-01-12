import React from 'react';
import '../styles/Dialogue.css';

const Dialogue = ({ message, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-content">
          <h2 className='dialog-message'>{message}</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
