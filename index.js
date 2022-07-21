const sumItems = function(array) {
  // This is the base case when the array is at length zero.
  if (array.length === 0) {
    return 0;
  }
  let newArray = [...array]; // Spread operator duplicating the array object
  let x = newArray.pop();
  // If the x element is an array we need to recursively add it.
  if (Array.isArray(x)) {
    x = sumItems(x); // By calling it again we can add the elements
    // without having to stop the current code progression.
  }
  // Return the current recursive level and calling a new level with a
  // smaller array.
  return x + sumItems(newArray);
};

console.log(sumItems([1,2,[3,[4]],5, 6]));

module.exports = sumItems;