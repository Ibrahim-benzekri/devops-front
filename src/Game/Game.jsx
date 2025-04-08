import React, { useState, useEffect } from 'react';

const Game = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingLetters, setRemainingLetters] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Fetch a random word from the API
  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
      const data = await response.json();
      setTargetWord(data[0].toUpperCase());
      console.log(data[0].toUpperCase())
    } catch (error) {
      console.error('Error fetching the random word:', error);
      // Fallback word in case of an error
      setTargetWord('REACT');
    }
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      setRemainingLetters(remainingLetters.filter((l) => l !== letter));

      if (!targetWord.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  useEffect(() => {
    if (targetWord && targetWord.split('').every((letter) => guessedLetters.includes(letter))) {
      setIsGameOver(true);
    }
  }, [guessedLetters, targetWord]);

  const renderWord = () => {
    return targetWord.split('').map((letter, index) => (
      <span key={index} className="mx-2 text-2xl">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Word Guess Game</h1>

      <div className="mb-4">{targetWord ? renderWord() : 'Loading word...'}</div>

      <p className="text-xl mb-4">Incorrect guesses: {incorrectGuesses}</p>

      <div className="flex flex-wrap justify-center mb-6">
        {remainingLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="text-xl mx-2 my-1 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
          >
            {letter}
          </button>
        ))}
      </div>

      {isGameOver && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Congratulations!</h2>
            <p className="text-xl mb-4">You guessed the word correctly!</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
