// const beforeLoad = "beforeLoad";
// const loading = "loading";
// const loaded = "loaded";

// enum es de enumerar
enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded"
}

const englishsLoadingState = {
  [LoadingState.beforeLoad]: "Before Load"
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// console.log(isLoading(LoadingState.loading));

// Literal types
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;

  for (let index = 0; index < dice; index++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }

  return pip;
}

// console.log(rollDice(4));
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 2 });
