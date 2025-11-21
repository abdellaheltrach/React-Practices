import { useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import RenderTaskList from "./RenderTaskList";
import { Task, FilterType } from "./types";
import { Toaster, toast } from "react-hot-toast";

import logo from "./assets/logo.png";

export default function ToDoApp() {
  const [taskArr, setTaskArr] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }, [taskArr]);

  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    isCompleted: false,
  });
  const [filter, setFilter] = useState<FilterType>("all");

  function addTask() {
    if (!newTask.title.trim()) return; // prevent empty titles

    setTaskArr((prev) => [
      ...prev,
      { ...newTask, id: Date.now(), isCompleted: false },
    ]);

    setNewTask({ id: 0, title: "", description: "", isCompleted: false }); // reset input
    toast.success("Task added successfully!");
  }
  return (
    <Container className="bg-white mt-24 py-4 space-y-3" maxWidth="sm">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-3">
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          color="error"
          variant={filter === "pending" ? "contained" : "outlined"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>

      {/* Task list */}
      <div className="space-y-2">
        <RenderTaskList
          TaskArr={taskArr}
          setTaskArr={setTaskArr}
          Filter={filter}
        />
      </div>

      {/* Add task section */}
      <div className="flex items-center space-x-2">
        <TextField
          size="small"
          label="Task Title"
          variant="outlined"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="flex-1 z-0"
        />
        <TextField
          size="small"
          label="Description"
          variant="outlined"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="flex-1 z-0"
        />
        <Button variant="contained" onClick={addTask}>
          Add
        </Button>
      </div>
    </Container>
  );
}
