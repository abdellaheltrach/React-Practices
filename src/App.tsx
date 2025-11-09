import { useState } from "react";

interface Player {
  firstName: string;
  lastName: string;
  score: number;
}

export default function Scoreboard() {
  const [player, setPlayer] = useState<Player>({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    } ); 
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md space-y-4">
      <label className="block text-lg">
        Score: <b>{player.score}</b>{" "}
        <button
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handlePlusClick}
        >
          +1
        </button>
      </label>

      <label className="block">
        First name:
        <input
          className="ml-2 border border-gray-300 rounded px-2 py-1"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <label className="block">
        Last name:
        <input
          className="ml-2 border border-gray-300 rounded px-2 py-1"
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </div>
  );
}
