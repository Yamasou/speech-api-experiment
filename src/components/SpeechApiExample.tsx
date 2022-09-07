import React, { useEffect, useState } from "react";

export const SpeechApiExample: React.FC = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "ja";
    recognition.continuous = true;
    recognition.start();

    recognition.onresult = function (event) {
      const results = event.results;

      for (let i = event.resultIndex; i < results.length; i++) {
        setResult((prev) => prev + " " + results[i][0].transcript);
      }
    };
  }, []);

  return <p>{result}</p>;
};
