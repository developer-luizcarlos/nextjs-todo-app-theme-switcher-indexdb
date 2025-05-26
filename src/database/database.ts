const databaseVersionInformation = {
  name: "todoDatabase",
  version: 1,
  updateVersion: function () {
    this.version += 1;
  },
};

const request = indexedDB.open(
  databaseVersionInformation.name,
  databaseVersionInformation.version
);

request.onupgradeneeded = (event: Event) => {
  const db = (event.target as IDBOpenDBRequest).result;

  if (!db.objectStoreNames.contains("TodoStore")) {
    db.createObjectStore("TodoStore", {
      keyPath: "id",
      autoIncrement: true,
    });
  }
};

export const startDatabase = () => {
  request.onupgradeneeded = (event: Event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("TodoStore")) {
      db.createObjectStore("TodoStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  };

  request.onsuccess = () => console.log(`Database opened successfully`);
};
