import React from "react";

function Button({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <button
        className="bg-purple-600 text-white w-28 font-semibold py-2 my-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300
      flex flex-col items-center"
      >
        {children ? children : "Button"}
      </button>
    </div>
  );
}
export function Side() {
  return (
    <div className="border-4 my-4 py-6 border-cyan-600 p-4">
      <div className="flex flex-wrap gap-3">
        {/* Button 1 */}
        <Button>
          <h3>Woow</h3>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.naturettl.com/wp-content/uploads/2023/06/29133512/macro-flower-photography-8-800x593.jpg"
              alt="flower"
              width={100}
              height={75}
            />
          </a>
        </Button>

      </div>
    </div>
  );
}
