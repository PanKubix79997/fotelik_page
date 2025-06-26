'use client';

import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import React from 'react';

const TOTAL_LINES = 10000;

export default function Scrool() {
  // Funkcja renderująca pojedynczą linijkę
  const Row = ({ index, style }: ListChildComponentProps) => {
    // Teksty specjalne w połowie i na końcu
    if (index === Math.floor(TOTAL_LINES / 2)) {
      return (
        <div style={style} className="p-1 text-center bg-yellow-100 font-semibold">
          <p>Nie doszedłeś, a ja już zdążyłem puścić baka w foteliku 🤭🧒</p>
        </div>
      );
    }
    if (index === TOTAL_LINES - 1) {
      return (
        <div style={style} className="p-1 text-center bg-green-100 font-semibold">
          <p>Udało się, a ja już zrobiłem 10 tysięcy bąków w foteliku! 🤣🧒</p>
        </div>
      );
    }

    // Normalna linijka z "fotelik"
    return (
      <div style={style} className="p-1 text-center border-b border-gray-200">
        fotelik
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Scrool - fotelik x 10 000</h1>

      <List
        height={600}         // wysokość okna scrolla
        itemCount={TOTAL_LINES}
        itemSize={30}        // wysokość pojedynczej linijki w px
        width={'100%'}
        className="w-full max-w-xl bg-white rounded-md shadow-md"
      >
        {Row}
      </List>
    </main>
  );
}
