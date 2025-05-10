import React from 'react';

function Options({ options, selectedOption, onOptionSelect, disabled }) {
  return (
    <div className="options">
      {options.map(option => (
        <button
          key={option.id}
          className={`option ${selectedOption === option.id ? 'selected' : ''} ${
            disabled && option.isCorrect ? 'correct' : ''
          }`}
          onClick={() => onOptionSelect(option.id)}
          disabled={disabled}
        >
          <span className="option-letter">{option.id.toUpperCase()}</span>
          <span className="option-text">{option.text}</span>
        </button>
      ))}
    </div>
  );
}

export default Options;