/* app/siedzisz/page.tsx */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function SiedziszPage() {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    legTouch: '',
    headOver: '',
    seatType: '',
    isoFix: '',
    direction: '',
    strapSelf: '',
    shoulderAbove: '',
    // ...dodaj kolejne pytania
  });

  const [result, setResult] = useState<'fotelik' | 'ok' | null>(null);

  const shouldSit = () => {
    const age = parseInt(formData.age);
    const height = parseInt(formData.height);
    const weight = parseInt(formData.weight);

    if (age < 12 || height < 150 || weight < 36) return true;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = shouldSit();
    setResult(res ? 'fotelik' : 'ok');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-7xl mb-2"
        >
          🧒
        </motion.div>

        <AnimatePresence>
          {result === 'fotelik' && (
            <motion.div
              key="chair"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-4xl"
            >
              🪑
            </motion.div>
          )}
          {result === 'ok' && (
            <motion.div
              key="ok"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-4xl"
            >
              ✅
            </motion.div>
          )}
        </AnimatePresence>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-xl mt-6 space-y-4 text-left"
        >
          <div>
            <label className="block font-semibold">Ile masz lat?</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Jaki masz wzrost? (cm)</label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Ile ważysz? (kg)</label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Dodaj tu więcej pytań... */}

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Sprawdź, czy siedzisz
          </button>
        </form>
      </div>
    </div>
  );
}
