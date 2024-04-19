import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div className="flex gap-x-4">
      <input
        type="text"
        name=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out"
      />
      <button
        className="text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
