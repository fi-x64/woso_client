// AnimatedText.js
import React, { useEffect, useState } from "react";
import "./DynamicText.module.scss";

const sentences = [".Welcome", ".Team Building", ".Trip"];

const DynamicText = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let interval;

    const animateText = () => {
      const sentence = sentences[currentSentenceIndex];
      const char = sentence.charAt(charIndex);

      setCurrentText((prevText) => prevText + char);
      charIndex++;

      if (charIndex > sentence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText("");
          charIndex = 0;
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          );
        }, 2000); // Thời gian trước khi chuyển sang câu mới (1000ms = 1 giây)
      }
    };

    interval = setInterval(animateText, 100); // Thời gian mỗi ký tự

    return () => clearInterval(interval);
  }, [currentSentenceIndex]);

  return (
    <div className="animated-text-loop text-6xl text-orange-600">
      {currentText}
    </div>
  );
};

export default DynamicText;
