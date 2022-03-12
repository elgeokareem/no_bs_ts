type ThreeDCoodinate = [x: number, y: number, z: number];

function add3DCoordinates(
  c1: ThreeDCoodinate,
  c2: ThreeDCoodinate
): ThreeDCoodinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinates([1, 2, 3], [4, 5, 6]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (v: string) => {
      str = v;
    }
  ];
}

const [str1getter, str1setter] = simpleStringState("hello");
console.log(str1getter);
str1setter("world");
console.log(str1getter);
