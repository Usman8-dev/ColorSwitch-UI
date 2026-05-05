import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      {/* Professional Bottom Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl px-6 py-4 flex gap-4 z-20">
        <button
          onClick={() => setcolor("#ef4444")}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Red
        </button>

        <button
          onClick={() => setcolor("#eab308")}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Yellow
        </button>

        <button
          onClick={() => setcolor("#000000")}
          className="px-6 py-3 bg-black hover:bg-zinc-900 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg border border-white/30"
        >
          Black
        </button>

        {/* Add more buttons easily */}
        <button
          onClick={() => setcolor("#3b82f6")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Blue
        </button>

        <button
          onClick={() => setcolor("#22c55e")}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Green
        </button>
        <button
          onClick={() => setcolor('olive')}
          className="px-6 py-3 bg-olive-500 hover:bg-olive-700 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Olive
        </button>
      </div>
    </div>
  );
}

export default App;
