import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'b', color: 'green'}]

  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state

  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess

  const handleKeyup = ({ key }) => {
    // check if key is backspace
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    // check if key is a letter
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
