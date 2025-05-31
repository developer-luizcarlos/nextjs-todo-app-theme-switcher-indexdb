import { type Task } from "@/types/task.types";
import { openDB } from "idb";

const databaseName = "TodoDB";
const databaseVersion = 2;
const storeName = "tasks";

const initTodoDatabase = async () => {
  await openDB(databaseName, databaseVersion, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

export const saveTask = async (task: Task) => {
  initTodoDatabase();

  const db = await openDB(databaseName, databaseVersion);
  await db.put(storeName, task);
  db.close();
};

export const getAllTasks = async (): Promise<Task[]> => {
  const db = await openDB(databaseName, databaseVersion);
  return (await db.getAll(storeName)) as Task[];
};
