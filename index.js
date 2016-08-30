function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function prependKitten(name) {
  var newArray = []; // An new empty array
for (var i = 0; i < kittens.length; i++) {
    newArray[i] = kittens[i];
}
  newArray.unshift(name);
  return newArray;
}

function appendKitten(name) {
  var newArray = []; // An new empty array
for (var i = 0; i < kittens.length; i++) {
    newArray[i] = kittens[i];
}
  newArray.push(name);
  return newArray;
}


function removeFirstKitten() {
  var newArray = []; // An new empty array
for (var i = 0; i < kittens.length; i++) {
    newArray[i] = kittens[i];
}
  newArray.shift();
  return newArray;
}

function removeLastKitten() {
  var newArray = []; // An new empty array
for (var i = 0; i < kittens.length; i++) {
    newArray[i] = kittens[i];
}
  newArray.pop();
  return newArray;
}
