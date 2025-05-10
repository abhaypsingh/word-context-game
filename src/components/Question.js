import React from 'react';

function Question({ sentence, highlightedWord }) {
  // Replace the highlighted word with a span that has special styling
  const parts = sentence.split(new RegExp(`(${highlightedWord})`, 'i'));
  
  return (
    <div className="question">
      <h2>What does the highlighted word mean in this sentence?</h2>
      <p className="sentence">
        {parts.map((part, index) => 
          part.toLowerCase() === highlightedWord.toLowerCase() ? 
            <span key={index} className="highlighted-word">{part}</span> : 
            part
        )}
      </p>
    </div>
  );
}

export default Question;