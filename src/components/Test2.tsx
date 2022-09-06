import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Test2: React.FC = () => {
  const [hits, setHits] = useState<string[]>([]);
  const commands = [
    {
      command: "米",
      callback: (result: { command: string; resetTranscript: () => void }) => {
        console.log(result);
        setHits((prev) => [...prev, result.command]);
      },
    },
    {
      command: "お金",
      callback: (command: string) => {
        console.log(command);
        setHits((prev) => [...prev, command]);
      },
      isFuzzyMatch: true,
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: true,
            language: "ja-JP",
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <hr />
      <div>
        {hits.map((hit, index) => (
          <span key={index}>{hit}</span>
        ))}
      </div>
      <hr />
      <p>{transcript}</p>
    </div>
  );
};
