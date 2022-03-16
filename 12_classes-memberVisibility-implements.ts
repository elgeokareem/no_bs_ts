interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  // private db: Record<string, string> = {};
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

// const myDB = new InMemoryDatabase();
const myDB = new PersistentMemoryDB();
myDB.set("name", "John");
// myDB.db["name"] = "bar"; private previene esto
console.log(myDB.get("name"));
console.log(myDB.saveToString());
const saved = myDB.saveToString();
myDB.set("name", "Jane");
console.log(myDB.get("name"));

const myDB2 = new PersistentMemoryDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get("name"));
