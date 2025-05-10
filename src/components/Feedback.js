import React from 'react';

function Feedback({ selectedOption, correctOption, onNext }) {
  const isCorrect = selectedOption.isCorrect;
  
  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      <h3>{isCorrect ? 'Correct!' : 'Not quite right!'}</h3>
      
      <p>
        {isCorrect ? 
          selectedOption.explanation : 
          `The correct answer is: ${correctOption.text}`
        }
      </p>
      
      {!isCorrect && (
        <p className="explanation">{correctOption.explanation}</p>
      )}
      
      <button className="next-button" onClick={onNext}>
        Next Question
      </button>
    </div>
  );
}

export default Feedback;