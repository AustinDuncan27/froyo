function getUserInput () {
const input = prompt(
  "Enter your froyo flavors, seperated by commas"
);
  return input;
}


function parseFlavors(inputString) {
  return inputString.split(",").map(function (flavor) {
    return flavor.trim();
  });
}

function countFlavors(flavorsArray) {
  const count= {};
for (let i = 0; i < flavorsArray.length; i++){
  const flavor = flavorsArray[i];
  if (count[flavor]) {
    count[flavor]= count[flavor] + 1;    
  }
  else {
    count[flavor]= 1;
  }
}
return count;
}
const userInput = getUserInput();
const flavors= parseFlavors(userInput);
const flavorsCounted= countFlavors(flavors);

console.log('Flavor counts:', flavors);
console.log ("Flavors Counted:", flavorsCounted);
