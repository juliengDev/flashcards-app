"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Shuffle } from "lucide-react";
import flashcardsData from "../data/flascardsData";

const FlashcardApp = () => {
  const [cards, setCards] = useState(flashcardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [remaining, setRemaining] = useState(flashcardsData.length);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setFlipped(false);
      setRemaining(cards.length - (currentIndex + 1));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setFlipped(false);
      setRemaining(cards.length - (currentIndex - 1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Révision JavaScript
          </h1>
          <Button
            variant="outline"
            onClick={shuffleCards}
            className="flex items-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            Mélanger
          </Button>
        </div>

        <div className="mb-4 text-sm text-gray-600 text-right">
          Cartes restantes: {remaining}/{cards.length}
        </div>

        <div className="mb-8">
          <Card
            className={`relative h-[300px] cursor-pointer transition-all duration-500 transform 
              ${flipped ? "rotate-y-180" : ""} preserve-3d`}
            onClick={() => setFlipped(!flipped)}
          >
            <CardContent
              className={`absolute w-full h-full backface-hidden p-6 flex items-center 
                justify-center text-center bg-white transition-all duration-300
                ${!flipped ? "opacity-100" : "opacity-0"}`}
            >
              <p className="text-xl font-medium text-gray-800">
                {cards[currentIndex].question}
              </p>
            </CardContent>

            <CardContent
              className={`absolute w-full h-full backface-hidden p-6 flex items-center 
                justify-center text-center bg-indigo-50 rotate-y-180 transition-all duration-300
                ${flipped ? "opacity-100" : "opacity-0"}`}
            >
              <p className="text-xl font-bold text-indigo-600">
                {cards[currentIndex].answer}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-32"
          >
            Précédent
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="w-32 bg-indigo-600 hover:bg-indigo-700"
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardApp;
