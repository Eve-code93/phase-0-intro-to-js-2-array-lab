// Write your solution here!
// Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1️⃣ Append a cat destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2️⃣ Prepend a cat destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3️⃣ Remove the last cat destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4️⃣ Remove the first cat destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5️⃣ Append a cat non-destructively
function appendCat(name) {
  return [...cats, name]; // Creates a new array without modifying `cats`
}

// 6️⃣ Prepend a cat non-destructively
function prependCat(name) {
  return [name, ...cats]; // Creates a new array without modifying `cats`
}

// 7️⃣ Remove the last cat non-destructively
function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last element
}

// 8️⃣ Remove the first cat non-destructively
function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first element
}

// Export the functions if necessary (for testing in Node.js)
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
