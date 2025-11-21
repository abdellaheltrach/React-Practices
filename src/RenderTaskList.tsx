import React, { useState, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTask from "./UpdateTask";
import { Task, FilterType } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmDialog from "./ConfirmDialog";
import { toast } from "react-hot-toast";
import { TaskAction } from "./reducers/taskReducer";

import noTasksImg from "./assets/no-tasks-v2.png";

interface RenderTaskListProps {
  TaskArr: Task[];
  dispatch: React.Dispatch<TaskAction>;
  Filter: FilterType;
}

export default function RenderTaskList({
  TaskArr,
  dispatch,
  Filter,
}: RenderTaskListProps) {
  const [SelectedtaskToUpdate, setTaskToUpdate] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

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

  const confirmDelete = () => {
    if (taskToDelete) {
      dispatch({ type: "DELETE_TASK", payload: taskToDelete.id });
      setTaskToDelete(null);
      toast.success("Task deleted successfully");
    }
  };

  const toggleComplete = (task: Task) => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
    toast.success(
      task.isCompleted ? "Task marked as pending" : "Task marked as completed"
    );
  };

  return (
    <div className="space-y-2 overflow-y-scroll max-h-[50vh] overflow-x-hidden p-1">
      <AnimatePresence mode="popLayout">
        {filteredTasks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <img
              src={noTasksImg}
              alt="No tasks"
              className="w-32 h-32 object-contain mb-4 opacity-80"
            />
            <p className="text-gray-500 text-lg font-medium">
              No tasks found here!
            </p>
            <p className="text-gray-400 text-sm">
              Time to relax or add a new task.
            </p>
          </motion.div>
        ) : (
          filteredTasks.map((task) => (
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
                  onClick={() => toggleComplete(task)}
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
                  onClick={() => setTaskToDelete(task)}
                  className="p-2 rounded-full hover:bg-red-100"
                >
                  <DeleteIcon className="text-red-600" />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
      {SelectedtaskToUpdate && (
        <EditTask
          taskArr={TaskArr}
          dispatch={dispatch}
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
      <ConfirmDialog
        isOpen={!!taskToDelete}
        title="Delete Task"
        message={`Are you sure you want to delete "${taskToDelete?.title}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setTaskToDelete(null)}
      />
    </div>
  );
}
