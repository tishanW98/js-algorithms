const arr = [-5, 2, 4, 6, 10];
const arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function searchelementinsortedarray(target, arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    else if(target < arr[middleIndex]){
      rightIndex = middleIndex - 1;
    }
    else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(searchelementinsortedarray(2, arr)); // 4
