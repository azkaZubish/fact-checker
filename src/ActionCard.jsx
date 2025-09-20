import { useState } from "react";

export default function ActionCard({ id, title, description, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fake detection logic
  const fakeDetect = () => {
    if (!inputValue) return;

    setLoading(true);

    setTimeout(() => {
      let simulatedResult;

      if (id === "text") {
        // Text detection demo (keyword "nuclear war")
        if (inputValue.toLowerCase().includes("nuclear war")) {
          simulatedResult = {
            label: "Potential misinformation",
            explanation:
              "This claim is alarming and likely false; verify with credible sources.",
          };
        } else if (inputValue.length < 20) {
          simulatedResult = {
            label: "Needs verification",
            explanation:
              "Statement is too short to verify; please provide more context.",
          };
        } else {
          simulatedResult = {
            label: "Reliable information",
            explanation: "Text seems factual based on general knowledge.",
          };
        }
      } else if (id === "image") {
        // Image detection demo
        simulatedResult = {
          label: "Needs verification",
          explanation:
            "Demo mode: Image verification is hardcoded for demonstration only.",
        };
      } else if (id === "url") {
        // URL detection demo
        simulatedResult = {
          label: "Potential misinformation",
          explanation:
            "Demo mode: URL detection is hardcoded for demonstration only.",
        };
      }

      setResult(simulatedResult);
      setLoading(false);
    }, 800);
  };

  // Result styles
  const getResultStyles = (label) => {
    if (label === "Reliable information") return "bg-green-100 text-green-800";
    if (label === "Potential misinformation") return "bg-red-100 text-red-800";
    if (label === "Needs verification") return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section
      id={id}
      className="flex flex-col items-center py-10 px-6
                 bg-white text-[#1A3B5D]
                 rounded-2xl shadow-lg
                 border border-white/30
                 w-[350px] h-[500px] flex-shrink-0
                 transform transition duration-300 hover:scale-105"
    >
      {/* Card Title */}
      <h3 className="text-2xl font-bold mb-3 drop-shadow">{title}</h3>

      {/* Card Description */}
      <p className="text-[#1A3B5D]/90 mb-2 text-center">{description}</p>

      {/* Demo Note */}
      <p className="text-sm text-gray-500 mb-4 text-center">
        ⚠️ Demo: Hardcoded results for hackathon demonstration
      </p>

      {/* Input / Textarea */}
      {id === "image" ? (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setInputValue(e.target.files[0]?.name || "")}
          className="mb-6 w-full border border-white/30 bg-white/50
                     text-[#1A3B5D] rounded-xl px-4 py-3 cursor-pointer
                     hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full h-28 border border-white/30 bg-[#E6F0FA]/50
                     text-[#1A3B5D] rounded-xl p-4 mb-6 resize-none
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* Action Button */}
      <button
        onClick={fakeDetect}
        className="px-8 py-3
                   bg-[#E6F0FA]/80 backdrop-blur-sm
                   text-[#1A3B5D] font-semibold rounded-full
                   shadow-md hover:scale-105 hover:bg-white transition"
      >
        {loading ? "Checking..." : `Check ${title}`}
      </button>

      {/* Result Box */}
      {result && (
        <div
          className={`mt-4 p-4 w-full rounded-xl text-center break-words ${getResultStyles(
            result.label
          )}`}
        >
          <strong>{result.label}:</strong> {result.explanation}
        </div>
      )}
    </section>
  );
}
