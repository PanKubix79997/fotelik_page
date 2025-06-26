'use client';

export default function WymaganiaSprzetowe() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-100 p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">
        Wymagania sprzętowe
      </h1>

      <section className="max-w-3xl mx-auto space-y-4">
        <p>
          Nasza strona korzysta z nowoczesnych technologii webowych, takich jak{' '}
          <strong>Framer Motion</strong> do animacji i dynamicznych interakcji. Dzięki temu
          możesz doświadczać interaktywnego i płynnego interfejsu użytkownika.
        </p>

        <h2 className="text-2xl font-semibold text-red-600 mt-6">Minimalne wymagania:</h2>
        <ul className="list-disc list-inside">
          <li>Nowoczesna przeglądarka (Chrome, Firefox, Edge, Safari)</li>
          <li>4 GB pamięci RAM</li>
          <li>Dowolny system operacyjny z obsługą JavaScript ES6+</li>
          <li>Stabilne połączenie internetowe</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-600 mt-6">Zalecane wymagania:</h2>
        <ul className="list-disc list-inside">
          <li>8 GB pamięci RAM lub więcej</li>
          <li>Procesor Intel i5 / AMD Ryzen 5 lub lepszy</li>
          <li>Karta graficzna wspierająca WebGL (np. Intel UHD 620+)</li>
          <li>Przeglądarka z włączoną akceleracją sprzętową</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-600 mt-6">Wymagające funkcje:</h2>
        <p>
          Poniższe sekcje strony zawierają zaawansowane animacje i dużą ilość danych, co
          może wpływać na płynność działania na słabszych urządzeniach:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>/cliccer</strong> – dynamicznie pojawiające się elementy (emotki fotelików), odliczanie czasu, zapis wyników; wymaga większej mocy obliczeniowej.
          </li>
          <li>
            <strong>/scrool</strong> – bardzo długi, przewijany tekst; może powodować spowolnienie na urządzeniach z mniejszą pamięcią RAM.
          </li>
          <li>
            <strong>/interaktywny-fotelik</strong> – wiele interaktywnych animowanych komponentów.
          </li>
          <li>
            <strong>/fotelikowy-konkurs</strong> – zaawansowana interakcja i zmienne komponenty.
          </li>
          <li>
            <strong>Wszystkie strony korzystające z Framer Motion</strong>, np. strona główna – zawierają animacje wejścia/wyjścia, co może wpływać na płynność.
          </li>
        </ul>

        <p className="mt-6 text-sm text-gray-600">
          Jeśli masz problemy z płynnością, spróbuj zamknąć inne karty lub użyć bardziej
          wydajnego urządzenia.
        </p>
      </section>
    </main>
  );
}
