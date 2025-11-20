import React, { useState } from "react";
import { Task } from "./types";
import { toast } from "react-hot-toast";

interface EditTaskProps {
  taskArr: Task[];
  setTaskArr: React.Dispatch<React.SetStateAction<Task[]>>;
  TaskToUpdate: Task;
  setTaskToUpdate: React.Dispatch<React.SetStateAction<Task | null>>;
}

export default function EditTask({
  taskArr,
  setTaskArr,
  TaskToUpdate,
  setTaskToUpdate,
}: EditTaskProps) {
  const [updatedTask, setUpdatedTask] = useState<Task>({
    id: TaskToUpdate.id,
    title: TaskToUpdate.title,
    description: TaskToUpdate.description,
    isCompleted: TaskToUpdate.isCompleted,
  });

  const handleUpdate = () => {
    if (!updatedTask.title.trim()) return; // Prevent empty title

    setTaskArr((prev) =>
      prev.map((t) => (t.id === TaskToUpdate.id ? updatedTask : t))
    );
    setTaskToUpdate(null);
    toast.success("Task updated successfully");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={() => setTaskToUpdate(null)} // Close on backdrop click
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96 max-w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-lg font-bold mb-3">Edit Task</h2>
        <input
          type="text"
          value={updatedTask.title}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, title: e.target.value })
          }
          className="border p-2 w-full rounded mb-3"
          placeholder="Edit title"
          autoFocus
        />
        <textarea
          value={updatedTask.description}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
          className="border p-2 w-full rounded mb-3"
          placeholder="Edit description"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setTaskToUpdate(null)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={!updatedTask.title.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
