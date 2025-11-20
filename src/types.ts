export interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export type FilterType = "all" | "completed" | "pending";
