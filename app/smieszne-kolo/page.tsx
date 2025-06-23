'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const nicknames = [
  'fotelikowamalpa552',
  'superdziecko2007',
  'panPasBezpieczenstwa',
  'królFotelikaX',
  'dzieckoTurboFotelik',
  'książęIsofixa',
  'fotelikowySzef',
  'władcaPasów',
  'fotelikXL3000',
  'małySiedzikBezpieczny',
  'fotelikfanek420',
  'pancernySiedzik',
  'dzidziaWKomforcie',
  'kapitanBezpieczeństwo',
  'dzieckoZPasem',
  'isofixowyRycerz',
  'fotelikBoomBoom',
  'siedzikZPrzytupem',
  'mistrzPasowania',
  'megaPasy'
];

export default function SmieszneKolo() {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;

    const spinAngle = 360 * 5 + Math.floor(Math.random() * 360);
    const randomIndex = Math.floor(Math.random() * nicknames.length);

    setRotation(prev => prev + spinAngle);
    setSpinning(true);

    setTimeout(() => {
      setResult(nicknames[randomIndex]);
      setSpinning(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-pink-200 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl border border-pink-300 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">🎡 Fotelikowe Koło Śmiechu</h1>
        
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="w-48 h-48 rounded-full border-8 border-pink-400 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-blue-700 bg-white"
        >
          🎠
        </motion.div>

        <button
          onClick={handleSpin}
          disabled={spinning}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg px-6 py-3 rounded-md transition"
        >
          {spinning ? 'Kręcę...' : 'Kręć!'}
        </button>

        {result && !spinning && (
          <p className="mt-6 text-lg text-blue-900">
            Twój przezwiskowy los to: <span className="font-bold">{result}</span>
          </p>
        )}
      </div>
    </main>
  );
}
