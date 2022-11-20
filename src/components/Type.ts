import { Key } from "react";

export interface TaskItem {
    id: Key;
    title: string;
    completed: boolean;

  }

//   export type addTask = (newTask: TaskItem) => void;
  export type AddTasks = (title: string) => void;