'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 flex flex-col items-center justify-center p-6 space-y-10 text-center">
      {/* Emotki po bokach */}
      <div className="relative w-full max-w-4xl flex justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-7xl select-none"
        >
          🧒
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-7xl select-none"
        >
          🧒
        </motion.div>
      </div>

      {/* Nagłówek */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 max-w-3xl mx-auto">
        Witaj na oficjalnej stronie o fotelikach
      </h1>

      {/* Opis */}
      <p className="max-w-3xl text-blue-800 text-lg leading-relaxed">
        Nasza strona powstała, aby pomóc rodzicom i opiekunom wybrać najlepsze foteliki samochodowe dla swoich dzieci. 
        Znajdziesz tu praktyczne porady, testy i ankiety, które ułatwią dobór odpowiedniego modelu. 
        Dbamy o bezpieczeństwo i komfort najmłodszych pasażerów. 
        Dzięki interaktywnym narzędziom szybko sprawdzisz, czy Twoje dziecko powinno nadal korzystać z fotelika. 
        Zapraszamy do eksploracji i wspólnej nauki!
      </p>

      {/* Sprawdź się */}
      <h2 className="text-3xl font-bold text-blue-900 mt-6">Sprawdź się?</h2>

      {/* Przycisk przejdź */}
      <Link href="/wiekowyoceniacz">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-xl font-semibold transition mt-2">
          Przejdź
        </button>
      </Link>

      {/* Nawigacja */}
      <nav className="mt-12 flex flex-col space-y-4 w-full max-w-md">
        {[
          { path: '/siedzisz', label: 'sprawdz czy siedzisz' },
          { path: '/lubiefotelik', label: 'przejdz do lubiefotelik' },
          { path: '/smieszne-kolo', label: 'przejdz do losowania fotelikowych nickow' },
          { path: '/ankieta-o-foteliku', label: 'przejdz do ankiety' },
          { path: '/memy', label: 'sprawdz aktualne memy' },
          { path: '/interaktywny-fotelik', label: 'przejdz do interaktywnego fotelika' },
          { path: '/kurczak', label: '/kurczak' },
          { path: '/fotelikowy-konkurs', label: 'sprawdz sie czy wszytko wiesz na temat fotelikow' },
          { path: '/scrool', label: 'przejdz do scroolowania uwaga bedzie dluuugie i smieszne' },
          { path: '/smieszne-info', label: 'przejdz do smiesznego infa' },
          { path: '/cliccer', label: 'sprawdez swoja szybkosc palcow naciskajac na obrazek fotelika tak szybko jak to mozliwe przez 10 sekund' },
          { path: '/wymagania-sprzetowe', label: 'sprawdz czy twoj pc/telefon da rade obsluzyc te strone jak tak to jakie' },
          { path: '/fotelikowa-gra', label: 'zagraj w grę' },             
        ].map(({ path, label }) => (
          <Link key={path} href={path}>
            <button className="block bg-pink-400 hover:bg-pink-500 text-white text-center py-3 rounded-lg font-semibold transition w-full">
              {label}
            </button>
          </Link>
        ))}
      </nav>
    </main>
  );
}
