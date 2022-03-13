function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map(item => item[key]);
}

const dogs = [
  { name: "mimi", age: 12 },
  { name: "rex", age: 8 },
  { name: "tuzik", age: 4 }
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

// Example 2

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCard: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCard", {
  productId: "123",
  quantity: 2,
  time: 123,
  user: "user1"
});

sendEvent("checkout", {
  time: 123,
  user: "user1"
});
