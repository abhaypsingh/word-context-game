import React, { useState } from 'react';
import Question from './Question';
import Options from './Options';
import Feedback from './Feedback';

function Game({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Loop back to the first question when we reach the end
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="game-container">
      <div className="question-counter">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      
      <Question 
        sentence={currentQuestion.sentence} 
        highlightedWord={currentQuestion.highlightedWord} 
      />
      
      <Options 
        options={currentQuestion.options} 
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        disabled={showFeedback}
      />
      
      {showFeedback && (
        <Feedback 
          selectedOption={currentQuestion.options.find(opt => opt.id === selectedOption)}
          correctOption={currentQuestion.options.find(opt => opt.isCorrect)}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default Game;