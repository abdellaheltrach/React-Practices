import React, { useState, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTask from "./UpdateTask";
import { Task, FilterType } from "./types";
import { motion, AnimatePresence } from "framer-motion";

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

  const filteredTasks = useMemo(() => {
    switch (Filter) {
      case "all":
        return TaskArr;
      case "completed":
        return TaskArr.filter((t) => t.isCompleted);
      case "pending":
        return TaskArr.filter((t) => !t.isCompleted);
      default:
        return TaskArr;
    }
  }, [TaskArr, Filter]);

  return (
    <div className="space-y-2 overflow-y-scroll max-h-[50vh] overflow-x-hidden p-1">
      <AnimatePresence mode="popLayout">
        {filteredTasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
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
                      t.id === task.id
                        ? { ...t, isCompleted: !t.isCompleted }
                        : t
                    )
                  )
                }
                className={`p-2 rounded-full hover:bg-green-100`}
              >
                {task.isCompleted ? (
                  <CheckIcon className="text-gray-400" />
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
          </motion.div>
        ))}
      </AnimatePresence>
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
