function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// con un default value
const returnString = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

const returnPromise = (url: string): Promise<string> => Promise.resolve("lol");

// agarrar multiple arguments 
function restExample(salutation: string, ...names: string[]): string {
  return `${salutation} ${names[0]} ${names[1]}`
}

console.log(restExample("hola", "wenas", "wenas"))