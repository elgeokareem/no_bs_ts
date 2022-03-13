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
