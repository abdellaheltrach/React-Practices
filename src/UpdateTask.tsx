import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface EditTaskProps {
  taskArr: Task[];
  setTaskArr: React.Dispatch<React.SetStateAction<Task[]>>;
  TaskToUpdate: Task;
  setTaskToUpdate:React.Dispatch<React.SetStateAction<Task|null>>;
}

export default function EditTask({
  taskArr,
  setTaskArr,
  TaskToUpdate,
  setTaskToUpdate
}: EditTaskProps) {
  const [updatedTask, setUpdatedTask] = useState<Task>({
    id: TaskToUpdate.id,
    title: TaskToUpdate.title,
    description: TaskToUpdate.description,
    isCompleted: TaskToUpdate.isCompleted
  });

  const handleUpdate = () => {
    setTaskArr(prev =>
      prev.map(t => (t.id === TaskToUpdate.id ? updatedTask : t))
    );
    setTaskToUpdate(prev=> null)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 max-w-full">
        <h2 className="text-lg font-bold mb-3">Edit Task</h2>
        <input
          type="text"
          value={updatedTask.title}
          onChange={e => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          className="border p-2 w-full rounded mb-3"
          placeholder="Edit title"
        />
        <textarea
          value={updatedTask.description}
          onChange={e =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
          className="border p-2 w-full rounded mb-3"
          placeholder="Edit description"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
