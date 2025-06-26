"use client";

import React from "react";

const memy = [
  "Ja, kiedy próbuję wstać z fotelika, a 5-punktowe pasy mnie trzymają.",
  "Muszę siedzieć, bo fotelik tak kazał.",
  "Kiedy dziecko w foteliku udaje, że to tron królewski.",
  "Fotelik samochodowy — mój najlepszy przyjaciel na każdej wyprawie.",
  "Jak fotelik wygląda po weekendzie z dzieckiem? Bitwa przetrwania.",
  "Mamo, dlaczego nie mogę wysiąść? Bo fotelik mówi „nie”!",
  "Gdy fotelik ma więcej pasów niż samolot.",
  "Fotelik + dziecko = zestaw nie do pokonania.",
  "Kiedy fotelik staje się lepszym fotelem do grania niż mój gamingowy.",
  "Moje dziecko w foteliku: 'Jestem bezpieczne, jestem królem drogi!'",
  "Gdy przypinasz dziecko do fotelika i czujesz się jak kapitan statku.",
  "Fotelik trzyma mocniej niż niektóre relacje.",
  "Nie ma miejsca na negocjacje — fotelik zawsze wygrywa.",
  "Dziecko w foteliku: 'Nie ruszam się, póki pasy mnie nie puszczą!'",
  "Kiedy myślisz, że wygrasz z pasami, ale pasy wygrywają.",
  "Fotelik samochodowy — strażnik bezpieczeństwa i mistrz trzymania.",
  "Pozycja w foteliku? Komfortowa jak na królewskim tronie.",
  "Gdy próbujesz szybko zapiąć pasy, ale fotelik mówi 'spokojnie'.",
  "Fotelik + dziecko = 100% pewności, że nie ma szans na ucieczkę.",
  "Dziecko w foteliku — mały więzień bezpieczeństwa.",
  "Fotelik wie, kiedy dziecko próbuje się wymknąć.",
  "Kiedy fotelik przypomina, że bezpieczeństwo to podstawa.",
  "Fotelik: tam, gdzie zaczyna się bezpieczeństwo na drodze.",
  "Kiedy myślisz, że twoje dziecko jest wolne, ale fotelik mówi inaczej.",
  "Fotelik to mały zamek na czterech kółkach.",
  "Dziecko w foteliku — mały pasażer z supermocami.",
  "Nie ruszam się bez zgody fotelika!",
  "Fotelik to najlepszy przyjaciel rodzica na drodze.",
  "Gdy fotelik przypomina, że bezpieczeństwo jest najważniejsze.",
  "Kiedy fotelik to nie tylko fotelik, a druga skóra dziecka.",
  "Moje dziecko i fotelik — nierozłączna para.",
  "Fotelik trzyma, nawet jeśli dziecko nie chce siedzieć.",
  "Nie ma wymówek — fotelik zawsze pilnuje bezpieczeństwa.",
  "Dziecko w foteliku: 'Tu jest moje miejsce, tu jest mój świat.'",
  "Fotelik to coś więcej niż siedzenie — to ochrona i komfort.",
  "Kiedy fotelik staje się centrum dowodzenia małego pasażera.",
  "Fotelik i dziecko — duet na każdą podróż.",
  "Nie ma ucieczki z fotelika, nawet jeśli dziecko bardzo chce.",
  "Fotelik to mały zamek pełen pasów i uścisków.",
  "Dziecko w foteliku — król/królowa drogi.",
  "Fotelik przypomina, że bezpieczeństwo to priorytet.",
  "Kiedy fotelik to więcej niż przedmiot — to troska.",
  "Moje dziecko w foteliku: 'Nie ruszam się, bo pasy mnie trzymają!'",
  "Fotelik to prawdziwy bohater każdej podróży.",
  "Gdy fotelik mówi: 'Musisz zostać, świat poczeka!'",
  "Fotelik — mój mały strażnik na czterech kółkach.",
  "Dziecko i fotelik — nierozłączna drużyna.",
  "Fotelik samochodowy — najlepszy kompan podróży.",
  "Kiedy fotelik daje poczucie bezpieczeństwa i spokoju.",
  "Dziecko w foteliku: 'To moje miejsce, tutaj jest bezpiecznie!'",
  "typowy ja ktoremu spadla zabawka a fotelik nie zechcial mnie puscic"
  
  

];


export default function MemyZFotelikow() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-bold mb-12 text-blue-800 text-center">
        51 Memów o Fotelikach Samochodowych(dodano wiecej memow)
      </h1>
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {memy.map((tekst, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 border border-pink-300 hover:shadow-xl transition cursor-default"
          >
            <p className="text-gray-900 font-medium">{tekst}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
