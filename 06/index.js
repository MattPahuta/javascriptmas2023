const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
  const shuffledArr = arr.slice(); // copy array as not to mutate original
  shuffledArr.sort((a,b) => 0.5 - Math.random()); // simple shuffle of array

  const pairs = {}; // initialize gift pairs object
  arr.forEach((name, i, arr) => { // iterate over people (arr)
    pairs[name] = shuffledArr[i % arr.length]; // assign gifter to recipients
  })

  // check and make sure gifter didn't get assigned themselves
  for (const name in pairs) {
      if (name === pairs[name]) {
          return generateSecretSantaPairs(arr);
      }
  }

  return pairs;


}

console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))
console.log(generateSecretSantaPairs(people))