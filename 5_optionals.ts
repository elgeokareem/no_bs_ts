function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient}`);
}

printIngredient("1", "egg");

interface User {
  id: string;
  info?: { email?: string };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return "";
}

function getEmailEasy(user: User) {
  return user?.info?.email ?? "";
}

// Optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);

  if (callback) {
    callback();
  }

  // or
  callback?.();
}
