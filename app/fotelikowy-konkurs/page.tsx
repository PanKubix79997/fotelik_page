// app/fotelikowy-konkurs/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  question: string;
  options: { text: string; correct: boolean }[];
};

const questions: Question[] = [
  {
    question: "Jak nazywa się pas, który trzyma Cię w foteliku?",
    options: [
      { text: "Pas bezpieczeństwa", correct: true },
      { text: "Pas kosmiczny", correct: false },
      { text: "Pasy fotelikowe z Marsa", correct: false },
    ],
  },
  {
    question: "Co zrobić, gdy fotelik jest za mały?",
    options: [
      { text: "Zmienić na większy", correct: true },
      { text: "Użyć gumki recepturki", correct: false },
      { text: "Przyszyć go do fotela", correct: false },
    ],
  },
  {
    question: "Jak długo trzeba siedzieć w foteliku?",
    options: [
      { text: "Aż stanie się gwiazdą kosmosu", correct: false },
      { text: "Do osiągnięcia odpowiedniego wzrostu i wieku", correct: true },
      { text: "Do momentu aż fotelik się znudzi", correct: false },
    ],
  },
  {
    question: "Co zrobić, gdy fotelik zasypia podczas jazdy?",
    options: [
      { text: "Cicho podziwiać jak śpi", correct: false },
      { text: "Delikatnie go obudzić i sprawdzić pasy", correct: true },
      { text: "Zamienić na hamak", correct: false },
    ],
  },
  {
    question: "Jak się czuje fotelik, gdy go nie używasz?",
    options: [
      { text: "Smutny i samotny", correct: false },
      { text: "Czeka na kolejnego bohatera podróży", correct: true },
      { text: "Zaczyna tańczyć disco", correct: false },
    ],
  },
];

export default function FotelikowyKonkurs() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  const getResultText = () => {
    if (score === questions.length) return "Kosmiczny mistrz fotelików 🚀";
    if (score >= 3) return "Fotelikowy ekspert ⭐️⭐️⭐️";
    if (score >= 1) return "Masz trochę fotelikowego talentu ⭐️⭐️";
    return "Musisz jeszcze trochę poćwiczyć, mały podróżniku 🍼";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-pink-600 flex flex-col items-center justify-center p-6 text-white font-sans select-none">
      {!finished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full bg-blue-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{questions[current].question}</h2>
            <div className="flex flex-col space-y-4">
              {questions[current].options.map(({ text, correct }, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(correct)}
                  className="bg-pink-400 text-blue-900 font-semibold py-3 rounded-md hover:bg-pink-500 transition-colors"
                >
                  {text}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
                className={`px-4 py-2 rounded-md font-semibold ${
                  current === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-pink-400 text-blue-900 hover:bg-pink-500"
                }`}
              >
                Wstecz
              </button>
              <span>
                Pytanie {current + 1} / {questions.length}
              </span>
              <div style={{ width: 64 }}></div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-pink-400 text-blue-900 rounded-lg p-6 shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Twój wynik</h2>
          <p className="text-xl mb-6">{getResultText()}</p>
          <p className="mb-6">
            Zdobyłeś {score} z {questions.length} punktów.
          </p>
          <button
            onClick={handleRestart}
            className="bg-blue-900 text-pink-400 font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Zagraj jeszcze raz
          </button>
        </motion.div>
      )}
    </main>
  );
}
