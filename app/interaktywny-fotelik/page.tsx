'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type InteractiveItem = {
  id: number;
  emoji: string;
  label: string;
  reaction: string;
};

const items: InteractiveItem[] = [
  { id: 1, emoji: '🧒', label: 'Dziecko', reaction: 'Hej! To ja – dziecko w foteliku! 😊' },
  { id: 2, emoji: '🪑', label: 'Krzesło', reaction: 'Kliknąłeś krzesło – wygodnie, prawda?' },
  { id: 3, emoji: '🚗', label: 'Samochód', reaction: 'Samochód gotowy do jazdy!' },
  { id: 4, emoji: '🎀', label: 'Kokardka', reaction: 'Stylowa kokardka dla fotelikowego fashionisty!' },
  { id: 5, emoji: '⭐', label: 'Gwiazda', reaction: 'Jesteś gwiazdą bezpieczeństwa!' },
  { id: 6, emoji: '🦄', label: 'Jednorożec', reaction: 'Magiczny fotelik na drodze!' },
  { id: 7, emoji: '💺', label: 'Fotelik', reaction: 'Fotelik dobrze przypięty, możesz czuć się bezpiecznie!' },
  { id: 8, emoji: '🧸', label: 'Miś', reaction: 'Pluszowy miś czuwa nad bezpieczeństwem!' },
  { id: 9, emoji: '🎉', label: 'Konfetti', reaction: 'Świętujemy bezpieczną podróż!' },
  { id: 10, emoji: '🤡', label: 'Klaun', reaction: 'Uśmiechaj się nawet w foteliku!' },
  { id: 11, emoji: '🔥', label: 'Ogień', reaction: 'Twoja jazda jest gorąca jak ogień! 🔥' },
  { id: 12, emoji: '🐥', label: 'Kurczak', reaction: 'Kurczak mówi: „Bezpieczeństwo przede wszystkim!”' },
  { id: 13, emoji: '💤', label: 'Zzz', reaction: 'Czas na drzemkę, ale pamiętaj o foteliku!' },
  { id: 14, emoji: '👑', label: 'Korona', reaction: 'Król lub królowa fotelików!' },
  { id: 15, emoji: '🌈', label: 'Tęcza', reaction: 'Tęczowa podróż pełna bezpieczeństwa!' },
  { id: 16, emoji: '⚡', label: 'Błyskawica', reaction: 'Szybka i bezpieczna jazda!' },
  { id: 17, emoji: '🍭', label: 'Lizak', reaction: 'Słodka nagroda za przypięcie!' },
  { id: 18, emoji: '🦋', label: 'Motyl', reaction: 'Lekkość i bezpieczeństwo w jednym!' },
  { id: 19, emoji: '🐻', label: 'Niedźwiedź', reaction: 'Silna ochrona fotelika!' },
  { id: 20, emoji: '🎈', label: 'Balon', reaction: 'Lataj bezpiecznie!' },
  { id: 21, emoji: '🛡️', label: 'Tarcza', reaction: 'Twoja tarcza ochronna na drodze!' },
  { id: 22, emoji: '📚', label: 'Książka', reaction: 'Nauka o bezpieczeństwie to podstawa!' },
  { id: 23, emoji: '🎵', label: 'Muzyka', reaction: 'Muzyka podróży dla spokojnego snu!' },
  { id: 24, emoji: '🍎', label: 'Jabłko', reaction: 'Zdrowa przekąska w podróży!' },
  { id: 25, emoji: '🕶️', label: 'Okulary', reaction: 'Styl i bezpieczeństwo idą w parze!' },
  { id: 26, emoji: '📸', label: 'Aparat', reaction: 'Uchwyć każdą bezpieczną chwilę!' },
  { id: 27, emoji: '🎮', label: 'Pad', reaction: 'Graj w bezpieczeństwo!' },
  { id: 28, emoji: '💡', label: 'Żarówka', reaction: 'Świetny pomysł - zawsze przypinaj pasy!' },
  { id: 29, emoji: '🐝', label: 'Pszczoła', reaction: 'Pracowity jak pszczoła - zawsze dbaj o fotelik!' },
  { id: 30, emoji: '🚦', label: 'Sygnalizacja', reaction: 'Zawsze zatrzymuj się na czerwonym!' },
];

export default function InteraktywnyFotelik() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 select-none">
        Interaktywny fotelik – kliknij emotkę!
      </h1>

      <div className="grid grid-cols-5 gap-6 max-w-5xl w-full">
        {items.map(({ id, emoji, label }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id)}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="text-6xl cursor-pointer select-none rounded-xl p-3 bg-white shadow-lg hover:shadow-xl transition"
            aria-label={`Kliknij aby zobaczyć reakcję: ${label}`}
            type="button"
          >
            {emoji}
          </motion.button>
        ))}
      </div>

      <div className="mt-10 min-h-[120px] max-w-3xl p-6 bg-white rounded-xl shadow-lg text-center text-blue-900 text-xl font-semibold select-none">
        <AnimatePresence mode="wait">
          {activeId !== null && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {items.find((item) => item.id === activeId)?.reaction}
            </motion.div>
          )}
          {activeId === null && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-blue-700"
            >
              Kliknij emotkę, aby zobaczyć reakcję
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
