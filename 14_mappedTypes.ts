type MyFlexibleDog = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDog = {
  name: "Fido",
  age: 3,
  breed: "Labrador"
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "needs to be implemented";
}

const lg: DogInfo = {
  name: "Fido",
  age: 3
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: () => {
    console.log("name changed");
  },
  onAgeChange: () => {
    console.log("age changed");
  },
  onAgeDelete: () => {
    console.log("age deleted");
  }
});
