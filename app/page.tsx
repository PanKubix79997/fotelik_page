"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-pink-200 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-pink-300 rounded-xl shadow-xl p-10 max-w-4xl w-full">
        {/* Animowany 7-latek */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-7xl"
        >
          🧒🏻
        </motion.div>

        {/* Tekst i przycisk */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Sprawdź się!
          </h1>
          <Link
            href="/wiekowyoceniacz"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg px-8 py-4 rounded-md transition"
          >
            Przejdź do testu
          </Link>
        </div>
      </div>
    </main>
  );
}
