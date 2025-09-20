"use client";
import { useState } from "react";
import ActionCard from "./ActionCard";

const cards = [
  {
    id: "text",
    title: "Text Fact-Check",
    description: "Paste text and verify accuracy instantly.",
    placeholder: "Enter text to fact-check...",
  },
  {
    id: "image",
    title: "Image Fact-Check",
    description: "Upload an image to verify authenticity.",
  },
  {
    id: "url",
    title: "URL Fact-Check",
    description: "Enter a link to check for misinformation.",
    placeholder: "Paste a URL...",
  },
];

export default function ActionsSection() {
  const [current, setCurrent] = useState(0);

  const prevCard = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="actions" className="bg-white py-12">
      <div className="mb-4 text-center text-yellow-700 font-semibold">
        ⚠️ Demo Mode: Text detection works only for the keyword "nuclear war"
      </div>

      <div className="rounded-xl px-6 mt-6 bg-[#E6F0FA] text-[#1A3B5D] shadow-lg hover:shadow-xl transition p-10 w-[93%] mx-auto min-h-[75vh] flex flex-col items-center justify-center">

        {/* Section Heading */}
        <h3 className="text-4xl font-bold mb-12 text-center">Try It Out</h3>

        {/* Card Slider */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevCard}
            className="absolute left-6 z-50 p-3 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
          >
            ←
          </button>

          {/* Card Stack */}
          <div className="relative w-[350px] h-[500px]">
            {cards.map((card, index) => {
              const isActive = index === current;
              const isPrev = index === (current - 1 + cards.length) % cards.length;
              const isNext = index === (current + 1) % cards.length;

              let style = { transform: "scale(0.8)", opacity: 0, zIndex: 0 };

              if (isActive) {
                style = { transform: "scale(1)", opacity: 1, zIndex: 30 };
              } else if (isPrev) {
                style = { transform: "scale(0.94) translateX(-200px)", opacity: 0.7, zIndex: 20 };
              } else if (isNext) {
                style = { transform: "scale(0.94) translateX(200px)", opacity: 0.7, zIndex: 20 };
              }

              return (
                <div
                  key={card.id}
                  className="absolute inset-0 transition-all duration-500 ease-in-out flex justify-center items-center"
                  style={style}
                >
                  <ActionCard {...card} />
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextCard}
            className="absolute right-6 z-50 p-3 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
