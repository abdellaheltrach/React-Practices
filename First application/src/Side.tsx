import React from "react";

function Button() {
  return (
    <div>
      <button className="bg-purple-600 text-white w-28 font-semibold py-2 my-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
        button
      </button>
    </div>
  );
}
export function Side() {
  return (
    <div className="border-4 my-4 py-6 border-cyan-600 p-4">
      <div className="flex flex-wrap gap-3">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}
