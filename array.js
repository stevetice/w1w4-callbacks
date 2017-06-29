// The second argument/parameter is expected to be a function
// Replace for loop with for Each loop
function findWaldo(arr, found) {
  arr.forEach(function findName(nameList, position) {
    if (nameList === "Waldo") {
      found(nameList, position);
    };

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(arr[i], i);   // execute callback
  //   }
  });
}

function actionWhenFound(arrItem, index) {
  console.log("Found " + arrItem + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);