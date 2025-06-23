"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Czy masz mniej niż 12 lat?" },
  { id: 2, text: "Czy Twoja wysokość jest mniejsza niż 135 cm?" },
  { id: 3, text: "Czy ważysz mniej niż 36 kg?" },
  { id: 4, text: "Czy Twoi rodzice zawsze przypinają Cię w foteliku podczas jazdy?" },
  { id: 5, text: "Czy jeździsz często samochodem z rodziną?" },
  { id: 6, text: "Czy znasz zasady dotyczące fotelików w Twoim kraju?" },
  { id: 7, text: "Czy masz już więcej niż 150 cm wzrostu?" },
  { id: 8, text: "Czy czujesz się bezpiecznie bez fotelika?" },
  { id: 9, text: "Czy jeździsz głównie na krótkich trasach?" },
  { id: 10, text: "Czy Twoi znajomi korzystają z fotelików?" },
];

type Answer = "yes" | "no";

export default function FotelikowyTest() {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  function handleChange(questionId: number, value: Answer) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function calculateResult() {
    // Logika oceny:
    // Im więcej odpowiedzi 'yes' na pytania wskazujące na potrzebę fotelika -> "Powinieneś korzystać z fotelika"
    // Kilka odpowiedzi na 'nie' oznacza możliwe zakończenie korzystania z fotelika
    // Prosta punktacja:
    // Pytania 1,2,3,4,5,6 traktujemy jako punkty na TAK -> fotelik konieczny
    // Pytania 7,8,9,10 traktujemy odwrotnie (tak = mniej potrzeby)
    let score = 0;

    for (const [id, ans] of Object.entries(answers)) {
      const qId = Number(id);
      if ([1, 2, 3, 4, 5, 6].includes(qId)) {
        if (ans === "yes") score += 1;
      } else {
        if (ans === "no") score += 1;
      }
    }

    if (score >= 6) return "yes";
    if (score >= 4) return "maybe";
    return "no";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      alert("Proszę odpowiedzieć na wszystkie pytania.");
      return;
    }
    setShowResult(true);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Test: Czy powinieneś siedzieć w foteliku?</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {questions.map(({ id, text }) => (
          <div key={id} className="bg-white p-4 rounded-lg shadow-md border border-pink-300">
            <p className="mb-3 font-medium text-gray-800">{text}</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q${id}`}
                  value="yes"
                  checked={answers[id] === "yes"}
                  onChange={() => handleChange(id, "yes")}
                  className="cursor-pointer"
                />
                Tak
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q${id}`}
                  value="no"
                  checked={answers[id] === "no"}
                  onChange={() => handleChange(id, "no")}
                  className="cursor-pointer"
                />
                Nie
              </label>
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Sprawdź wynik
          </button>
        </div>
      </form>

      {showResult && (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg border border-blue-400 text-center text-xl font-semibold text-blue-900">
          {(() => {
            const result = calculateResult();
            if (result === "yes") {
              return <>Tak, powinieneś nadal korzystać z fotelika. Bezpieczeństwo jest najważniejsze!</>;
            }
            if (result === "maybe") {
              return (
                <>
                  Możliwe, że powinieneś jeszcze korzystać z fotelika, ale obserwuj wzrost i komfort jazdy dziecka.
                </>
              );
            }
            return <>Nie, możesz już bezpiecznie korzystać z normalnego siedzenia w samochodzie.</>;
          })()}
        </div>
      )}
    </main>
  );
}
