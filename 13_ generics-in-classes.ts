interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  // private db: Record<string, string> = {};
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

// const myDB = new InMemoryDatabase();
const myDB = new PersistentMemoryDB<number, string>();
myDB.set("name", 1);
// myDB.db["name"] = "bar"; private previene esto
console.log(myDB.get("name"));
console.log(myDB.saveToString());
const saved = myDB.saveToString();
myDB.set("name", 2);
console.log(myDB.get("name"));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("name"));
