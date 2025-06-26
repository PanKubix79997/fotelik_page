'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cliccer() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
[count]

    if (timeLeft === 0) {
      let res = '';
      if (count < 20) res = '🧒 Wolny tester fotelika';
      else if (count < 40) res = '🧒 Średni tester fotelika';
      else res = '🧒 Szybki tester fotelika';

      setResult(res);
      const prev = JSON.parse(sessionStorage.getItem('cliccerHistory') || '[]');
      const updated = [...prev, count];
      sessionStorage.setItem('cliccerHistory', JSON.stringify(updated));
      setHistory(updated);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, started]);

  useEffect(() => {
    const prev = JSON.parse(sessionStorage.getItem('cliccerHistory') || '[]');
    setHistory(prev);
  }, []);

  const startGame = () => {
    setCount(0);
    setTimeLeft(10);
    setResult('');
    setStarted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-amber-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold">Klikaj w fotelik 🪑</h1>
      <p className="text-lg">Masz tylko {timeLeft} sekund!</p>

      <motion.button
        whileTap={{ scale: 0.9 }}
        disabled={timeLeft === 0}
        onClick={() => started && setCount((c) => c + 1)}
        className="text-6xl select-none"
      >
        🪑
      </motion.button>

      <div className="text-xl font-semibold">Kliknięcia: {count}</div>

      {result && <div className="text-2xl mt-4">{result}</div>}

      {timeLeft === 0 && (
        <button
          onClick={startGame}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold mt-4"
        >
          Zagraj jeszcze raz
        </button>
      )}

      {history.length > 0 && (
        <div className="mt-8 text-left">
          <h2 className="text-xl font-bold mb-2">Historia wyników:</h2>
          <ul className="list-disc pl-6 space-y-1">
            {history.map((h, i) => (
              <li key={i}>Próba {i + 1}: {h} kliknięć</li>
            ))}
          </ul>
        </div>
      )}

      {!started && (
        <button
          onClick={startGame}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Start
        </button>
      )}
    </main>
  );
}
