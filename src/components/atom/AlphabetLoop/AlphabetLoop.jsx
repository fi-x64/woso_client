import React, { useState, useEffect } from "react";

const AlphabetLoop = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const stopChars = ["D", "C", "1", "9"];

  const [currentChar, setCurrentChar] = useState("A");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextChar =
        alphabet[(alphabet.indexOf(currentChar) + 1) % alphabet.length];
      setCurrentChar(nextChar);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentChar, alphabet, stopChars]);

  return (
    <div>
      <h1 className="text-center text-2xl mt-2 font-bold text-green-600">
        {currentChar}
      </h1>
    </div>
  );
};

export default AlphabetLoop;
