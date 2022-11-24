import { Key } from "react";

export interface TaskItem {
    id: Key;
    title: string;
    completed: boolean;

  }

  export interface CountProps{

  }

  export type RemoveTask = (id: Key) => void;
  export type UpdateTask = (id: Key, value:TaskItem) => void;

  // export type addTask = (newTask: TaskItem) => void;
  export type AddTasks = (title: string) => void;

  export type CountTask = (id: Key) => void;
  export type EditTask = (title: string) => void;