import { type Task } from "@/types/task.types";
import { openDB } from "idb";

const initTodoDatabase = async () => {
  await openDB("TodoDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

export const saveTask = async (task: Task) => {
  initTodoDatabase();

  const db = await openDB("TodoDB", 1);
  await db.put("tasks", task);
  db.close();
};

export const getAllTasks = async (): Promise<Task[]> => {
  const db = await openDB("TodoDB", 2);
  return (await db.getAll("tasks")) as Task[];
};
