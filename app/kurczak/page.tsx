'use client';

import { motion } from 'framer-motion';

export default function KurczakPage() {
  return (
    <main className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center text-center p-6 space-y-10">
      {/* Kurczak */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="text-8xl select-none"
      >
        🐔
      </motion.div>

      {/* Tekst wypowiedzi */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-yellow-800 max-w-xl"
      >
        Zdążyłem już polecieć na księżyc, a ty jeszcze siedzisz w foteliku 🚀🪑
      </motion.h1>

      {/* Dodatkowy tekst */}
      <p className="text-yellow-900 max-w-md text-lg">
        Kurczak nie ocenia... ale trochę się dziwi.
      </p>
    </main>
  );
}
