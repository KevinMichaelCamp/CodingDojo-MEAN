function minMaxAvg(arr){
  let total = 0
  let min = arr[0]
  let max = arr[0]

  for(var i = 0; i < arr.length; i ++){
    total += arr[i];
    if(arr[i] < min){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i]
    }
  }

  let avg = total / arr.length

  return `The minimum is ${min}, the maximimum is ${max}, and the average is ${avg}.`
}

console.log(minMaxAvg([1,2,3,4,5]));
console.log(minMaxAvg([-25,42,5,-55,451]));
