import React from "react";

function Loader({ text = "Please wait..." }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
      <div className="flex gap-2">
        <span className="w-10 h-10 bg-red-500 rounded-full animate-bounce "></span>
        <span className="w-10 h-10 bg-blue-500 rounded-full animate-bounce [animation-delay:0.15s]"></span>
        <span className="w-10 h-10 bg-green-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>

      <p className="text-indigo-400 mt-6 font-semibold text-5xl">{text}</p>
    </div>
  );
}

export default Loader;
