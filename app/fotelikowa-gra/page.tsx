'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const kids = [
  {
    id: 'newborn',
    emoji: '👶',
    label: 'Noworodek',
    options: ['Nosidełko (tyłem)'],
    defaultOption: 'Nosidełko (tyłem)',
  },
  {
    id: 'four',
    emoji: '👧',
    label: '4-latka',
    options: ['5-punktowy fotelik', '3-punktowy fotelik', 'Zwykły fotelik'],
    defaultOption: '5-punktowy fotelik',
  },
  {
    id: 'seven',
    emoji: '🧒',
    label: '7-latek',
    options: ['Zwykły fotelik', 'Booster'],
    defaultOption: 'Zwykły fotelik',
  },
  {
    id: 'twelve',
    emoji: '🧑',
    label: '12+ lat',
    options: ['Bez fotelika', 'Booster'],
    defaultOption: 'Bez fotelika',
  },
];

// Sprawdzanie dopasowania
function checkFit(kidId: string, seat: string) {
  if (kidId === 'newborn') {
    return seat === 'Nosidełko (tyłem)' ? 'dobrze' : 'źle';
  }
  if (kidId === 'four') {
    return ['5-punktowy fotelik', '3-punktowy fotelik', 'Zwykły fotelik'].includes(seat) ? 'dobrze' : 'źle';
  }
  if (kidId === 'seven') {
    return seat === 'Zwykły fotelik' || seat === 'Booster' ? 'dobrze' : 'źle';
  }
  if (kidId === 'twelve') {
    return seat === 'Bez fotelika' || seat === 'Booster' ? 'dobrze' : 'źle';
  }
  return 'źle';
}

export default function FotelikowaGra() {
  const [selectedSeats, setSelectedSeats] = useState<Record<string, string>>({
    newborn: 'Nosidełko (tyłem)',
    four: '5-punktowy fotelik',
    seven: 'Zwykły fotelik',
    twelve: 'Bez fotelika',
  });

  function handleSelect(kidId: string, seat: string) {
    setSelectedSeats((prev) => ({ ...prev, [kidId]: seat }));
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-100 p-8 overflow-x-auto">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Fotelikowa Gra: Dobierz fotelik do dziecka
      </h1>

      <div className="flex space-x-12 min-w-max">
        {kids.map(({ id, emoji, label, options }) => {
          const seat = selectedSeats[id];
          const fit = checkFit(id, seat);

          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-4 bg-white shadow-xl rounded-2xl w-60 ${
                fit === 'źle' ? 'border-4 border-red-500' : 'border border-gray-300'
              }`}
            >
              <div className="text-6xl">{emoji}</div>
              <p className="text-lg mt-2 font-semibold text-blue-700">{label}</p>

              <select
                className="mt-2 p-2 rounded border border-gray-400 w-full text-center text-lg"
                value={seat}
                onChange={(e) => handleSelect(id, e.target.value)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <div className="text-5xl mt-4">
                {/* Ikonki do fotelików */}
                {seat === 'Bez fotelika' ? (
                  <span className="text-green-600">✅</span>
                ) : seat === 'Booster' ? (
                  <span role="img" aria-label="Booster" className="text-yellow-600">
                    🪑
                  </span>
                ) : seat === 'Nosidełko (tyłem)' ? (
                  <span role="img" aria-label="Nosidełko" className="inline-block rotate-180">
                    🪑
                  </span>
                ) : (
                  <span role="img" aria-label="Fotelik" className="text-blue-600">
                    🪑
                  </span>
                )}
              </div>

              {fit === 'źle' && (
                <p className="mt-4 text-red-600 font-bold text-center px-2">
                  Źle dobrane! <br />
                  {id === 'twelve'
                    ? '12+ lat są bardziej bezpieczne z boosterem lub bez fotelika.'
                    : id === 'seven'
                    ? 'Booster jest zalecany dla starszych dzieci, a zwykły fotelik dla 7-latka.'
                    : 'Dopasuj właściwy fotelik dla dziecka.'}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
