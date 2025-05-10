export const loadQuestions = async () => {
    try {
      const response = await fetch('/data/questions.json');
      if (!response.ok) {
        throw new Error('Failed to load questions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading questions:', error);
      throw error;
    }
  };