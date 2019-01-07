// function binarySearch(arr, value){
// let arrayStart = 0
// let arrayEnd = arr.length
// let resultIndex = -1
// let arrayLength = arr.length

// while (arrayLength > 1){
//   if (arr[arrayLength/2].ceil() == value){
//     resultIndex = (arrayLength / 2).ceil()
//   }
//   if (arr[arrayLength / 2].ceil() > value){
//     arrayEnd = (arrayLength / 2).ceil()
//     arrayLength = (arrayLength / 2)
//   }

// }
// }

function iterativeFunction(arr, x) {
  let resultIndex = -1

  let start = 0, end = arr.length - 1;

   
  while (start <= end) {

  
    let mid = Math.floor((start + end) / 2);

  
    if (arr[mid] === x) {
      resultIndex = mid
    }

  
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return resultIndex;
} 

array = [1,2,3,4,5,6,7,8,9,10]

iterativeFunction(array, 4)