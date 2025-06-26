'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const funnyFacts = [
  "Dzięki nam 7-latki mogą puszczać bąki w foteliku.",
  "Stworzyliśmy fotelik, który tańczy poloneza po północy.",
  "Nasze foteliki znają więcej żartów niż przeciętny stand-uper.",
  "Każdy kliknięty pas to ukłon dla bezpiecznego humoru.",
  "Współpracujemy z UFO w zakresie ergonomii siedzenia.",
  "Nasze pasy bezpieczeństwa potrafią śmiać się z sucharów.",
  "Gdyby foteliki miały TikToka, nasze byłyby viralowe.",
  "Każdy zakup to +1 do mocy beknięcia.",
  "Dzięki nam dzieci w fotelikach grają symfonię beknięć.",
  "W naszej firmie każde krzesło przechodzi test wygodności wśród kóz.",
  "Stworzyliśmy fotelik, który mówi 'kocham cię' po każdej jeździe.",
  "Każde kliknięcie pasów wysyła pozytywne wibracje do satelitów.",
  "Zaprojektowaliśmy poduszkę, która zna 7 języków.",
  "W naszych testach foteliki przeżyły apokalipsę ciastek.",
  "Każdy śrubokręt w naszej firmie ma imię i osobowość.",
  "Wspieramy badania nad teleportacją dzieci do fotelika.",
  "Nasze logo powstało w trakcie jedzenia naleśnika.",
  "Testujemy produkty na chomikach psychologicznych.",
  "Nasze foteliki zyskały aprobatę misia z bajki.",
  "Stworzyliśmy pierwszy fotelik, który śpiewa kolędy w lipcu.",
  "Fotelik + marchewka = nieoczekiwana zabawa.",
  "Każde 10 kliknięć pasów aktywuje disco w aucie.",
  "Kiedyś nasz fotelik pokonał mistrza szachowego.",
  "Śrubka z modelu X-400 wygrała konkurs piękności.",
  "Fotelik F12 został nazwany na cześć kota prezesa.",
  "Inspiracją był sen o gigantycznym spaghetti.",
  "Projektujemy także krzesła dla dinozaurów w VR.",
  "Podczas testów foteliki opowiadają dowcipy o śrubkach.",
  "Niektóre modele mają opcję generowania tęczy.",
  "Gdyby foteliki miały uczucia, nasze by się cieszyły.",
  "Za każdy zakup sadzimy drzewo z gumy balonowej.",
  "Siedzisz? Bo nasz nowy model cię wystrzeli!",
  "Każdy fotelik podpisuje kodeks śmieszności.",
  "Foteliki stworzone z pasją i watą cukrową.",
  "Kiedyś testowaliśmy jeden w kosmosie. Przetrwał.",
  "Nasz system oceny zawiera wskaźnik poziomu uśmiechu.",
  "Foteliki kompatybilne z rakietami z LEGO.",
  "Zrobiliśmy symulator jazdy fotelikiem po Marsie.",
  "Inspiracją były sny o galopujących fotelikach.",
  "Kiedyś fotelik wygrał teleturniej.",
  "Twój fotelik potrafi więcej niż ci się wydaje.",
  "Nowy model ma ukryty tryb karaoke.",
  "Fotelik, który reaguje na żarty taty.",
  "Każdy produkt zawiera 1% magii przytulania.",
  "Testujemy komfort siedzenia przy pomocy alpak.",
  "Inspiracją do designu był kształt banana.",
  "Nasz designer zjadł 3 pączki i zaprojektował hit.",
  "Fotelik, który raz powiedział 'kocham cię' papudze.",
  "Wbudowany czujnik nudy aktywuje bąbelki śmiechu.",
  "Podgrzewane siedzenia inspirowane gorącym kakao.",
  "Ten model wie, kiedy dziecko się uśmiecha.",
  "Nasze testy obejmują śmianie się przez godzinę.",
  "Każdy nowy model fotelika świętujemy pizzą.",
  "Król fotelików: Fotelikus Maximus – nasz bestseller.",
  "Wyprodukowaliśmy model z imieniem Bekozaur.",
  "Nowy kolor? Neonowa śmieszność.",
  "Prototyp 001 miał funkcję klaskania przy wstrząsach.",
  "Fotelik łączy się z chmurą marzeń dzieci.",
  "Wersja limitowana: Fotelik z klocków.",
  "Jesteśmy ekspertami od miękkiego lądowania na kanapie.",
  "Każdy egzemplarz przechodzi test 'O rety, ale miękko!'.",
  "Stworzyliśmy pierwszą emotkę fotelika.",
  "Fotelik łączy się z lodówką tylko w piątki.",
  "Dzięki nam dzieci pytają: mogę już do fotelika?",
  "Podczas projektowania słuchamy bajek z kasety.",
  "Kiedyś fotelik przetrwał 20 min bajki bez przerwy.",
  "Foteliki z funkcją śpiewania Despacito.",
  "Nasze modele znają 3 języki i 5 memów.",
  "Kliknięcie pasa uruchamia uśmiech systemowy.",
  "Najczęstszy komentarz? Ale fajne to siedzisko!",
  "Inspiracją była poduszka babci z 1994 r.",
  "Każdy testowany na śmiech i fikołki myślowe.",
  "Wbudowana funkcja rozśmieszania smutnych misiów.",
  "Testy w laboratorium poduszek i miłości.",
  "Fotelik, który raz zatweetował 'miau'.",
  "Nowe kolory: arbuzowy róż i bekowy błękit.",
  "Po 50 kliknięciach aktywuje się tryb żartów taty.",
  "Nasze siedzenia śnią o plażach i cukierkach.",
  "Na ścianach biura: dyplomy z wygodologii.",
  "Fotelik + dziecko = przytulna przyszłość.",
  "Kiedyś zamówiono nasz model przez sen.",
  "Każdy guzik układa się w napis 'uśmiech'.",
  "Modele inspirowane grami z dzieciństwa.",
  "Zaprojektowane do wygłupów i podróży.",
  "Nasze foteliki testują maskotki w lunaparku.",
  "Zaprojektowane przez grupę dzieci w śnie.",
  "Foteliki kompatybilne z dobrym humorem.",
  "Kliknij pas, aktywuj radość.",
  "Fotelik: Twoje centrum dowodzenia śmiechem.",
  "Instrukcja obsługi zawiera kawał o foteliku.",
  "Projektowane przy dźwiękach śmiechu dzieci.",
  "Nawet fotelik chce być częścią zabawy!"
];

export default function SmieszneInfo() {
  const [emojis, setEmojis] = useState<number[]>([]);

  const addEmojis = () => {
    setEmojis((prev) => [
      ...prev,
      ...Array.from({ length: 30 }, (_, i) => Date.now() + i)
    ]);
  };

  return (
    <main className="min-h-screen p-6 bg-yellow-100 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-800 mb-6">
        Śmieszne Fakty o Naszej Karierze
      </h1>
      <div className="space-y-4 max-w-4xl w-full">
        {funnyFacts.map((fact, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-white shadow p-4 rounded-lg text-left"
          >
            <strong>{i + 1}.</strong> {fact}
          </motion.p>
        ))}
      </div>
      <button className="mt-40 bg-yellow-600 text-black hover:bg-yellow-600" onClick={addEmojis}>
        Poka 7-latki
      </button>

      <AnimatePresence>
        {emojis.map((key) => (
          <motion.span
            key={key}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ opacity: 1, y: -600, x: Math.random() * 600 - 300 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="fixed text-4xl"
            style={{ left: `${Math.random() * 100}%`, top: '80%' }}
          >
            🧒
          </motion.span>
        ))}
      </AnimatePresence>
    </main>
  );
}
