import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import { loadQuestions } from './utils/dataLoader';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadQuestions();
        setQuestions(data.questions);
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions. Please refresh the page.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading game...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app">
      <Header />
      <Game questions={questions} />
    </div>
  );
}

export default App;