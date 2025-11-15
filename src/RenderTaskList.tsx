import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTask from "./UpdateTask";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

type FilterType = "all" | "completed" | "pending";

interface RenderTaskListProps {
  TaskArr: Task[];
  setTaskArr: React.Dispatch<React.SetStateAction<Task[]>>;
  Filter: FilterType;
}

export default function RenderTaskList({
  TaskArr,
  setTaskArr,
  Filter,
}: RenderTaskListProps) {
  const [SelectedtaskToUpdate, setTaskToUpdate] = useState<Task | null>(null);

  function FilterTasks(TasksArr: Task[]): Task[] {
    switch (Filter) {
      case "all":
        return TasksArr;
      case "completed":
        return TasksArr.filter((t) => t.isCompleted);
      case "pending":
        return TasksArr.filter((t) => !t.isCompleted);
      default:
        return TasksArr; // fallback to all if Filter has unexpected value
    }
  }

  return (
    <div className="space-y-2 overflow-y-scroll max-h-[50vh]">
      {FilterTasks(TaskArr).map((task) => (
        <div
          key={task.id}
          className="p-3 border rounded flex justify-between items-center bg-gray-50"
        >
          <div>
            <h3
              className={`font-bold ${
                task.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`${
                task.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {task.description}
            </p>
          </div>

          <div className="flex space-x-2">
            {/* Complete Icon */}
            <button
              onClick={() =>
                setTaskArr((prev) =>
                  prev.map((t) =>
                    t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
                  )
                )
              }
              className={`p-2 rounded-full hover:bg-green-100`}
            >
              {task.isCompleted ? (
                <CheckIcon className="text-gray-400" /> // or any "completed" icon style
              ) : (
                <CheckIcon className="text-green-600" />
              )}
            </button>

            {/* Update Icon */}
            <button
              onClick={() => setTaskToUpdate(task)}
              className="p-2 rounded-full hover:bg-yellow-100 "
            >
              <EditIcon className="text-yellow-600" />
            </button>

            {/* Delete Icon */}
            <button
              onClick={() =>
                setTaskArr((prev) => prev.filter((t) => t.id !== task.id))
              }
              className="p-2 rounded-full hover:bg-red-100"
            >
              <DeleteIcon className="text-red-600" />
            </button>
          </div>
        </div>
      ))}
      {SelectedtaskToUpdate && (
        <EditTask
          taskArr={TaskArr}
          setTaskArr={setTaskArr}
          TaskToUpdate={
            SelectedtaskToUpdate ?? {
              id: 0,
              title: "",
              description: "",
              isCompleted: false,
            }
          }
          setTaskToUpdate={setTaskToUpdate}
        />
      )}
    </div>
  );
}
