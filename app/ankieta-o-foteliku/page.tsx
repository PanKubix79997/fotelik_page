"use client";

import React, { useState } from "react";

type Answer = "like" | "dislike" | "neutral";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Czy czujesz się bezpiecznie, gdy Twoje dziecko siedzi w foteliku?" },
  { id: 2, text: "Czy uważasz, że fotelik ogranicza swobodę dziecka?" },
  { id: 3, text: "Czy pamiętasz, kiedy ostatnio sprawdzałeś prawidłowość montażu fotelika?" },
  { id: 4, text: "Czy lubisz, gdy dziecko jest przypięte w foteliku podczas każdej jazdy?" },
  { id: 5, text: "Czy uważasz, że fotelik jest niezbędny nawet na krótkie trasy?" },
  { id: 6, text: "Czy myślisz, że fotelik poprawia komfort jazdy dziecka?" },
  { id: 7, text: "Czy zdarzyło Ci się narzekać na fotelik podczas podróży?" },
  { id: 8, text: "Czy fotelik jest Twoim zdaniem obowiązkowym wyposażeniem samochodu?" },
  { id: 9, text: "Czy uważasz, że dziecko powinno siedzieć w foteliku jak najdłużej?" },
  { id: 10, text: "Czy fotelik przypomina Ci, jak ważne jest bezpieczeństwo w podróży?" },
];

export default function LubieFotelik() {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  function handleChange(questionId: number, value: Answer) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function calculateResult() {
    const vals = Object.values(answers);
    const likeCount = vals.filter((v) => v === "like").length;
    const dislikeCount = vals.filter((v) => v === "dislike").length;
    return likeCount >= dislikeCount ? "like" : "dislike";
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
      <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Czy lubisz fotelik?</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {questions.map(({ id, text }) => (
          <div key={id} className="bg-white p-4 rounded-lg shadow-md border border-pink-300">
            <p className="mb-3 font-medium text-gray-800">{text}</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q${id}`}
                  value="like"
                  checked={answers[id] === "like"}
                  onChange={() => handleChange(id, "like")}
                  className="cursor-pointer"
                />
                Tak
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q${id}`}
                  value="dislike"
                  checked={answers[id] === "dislike"}
                  onChange={() => handleChange(id, "dislike")}
                  className="cursor-pointer"
                />
                Nie
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q${id}`}
                  value="neutral"
                  checked={answers[id] === "neutral"}
                  onChange={() => handleChange(id, "neutral")}
                  className="cursor-pointer"
                />
                Nie wiem / trudno powiedzieć
              </label>
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Pokaż wynik
          </button>
        </div>
      </form>

      {showResult && (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg border border-blue-400 text-center text-xl font-semibold text-blue-900">
          {calculateResult() === "like" ? (
            <>
              Ooo, lubisz fotelik, a fotelik lubi Ciebie! 😊
            </>
          ) : (
            <>
              Wygląda na to, że nie lubisz fotelika, ale nic — fotelik lubi Ciebie. 🙂
            </>
          )}
        </div>
      )}
    </main>
  );
}
