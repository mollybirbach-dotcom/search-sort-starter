// python -m http.server
//random number


let NUM = Math.floor(Math.random() * 100);
console.log(NUM);

function sequentialSearch(){
for(let i = 0; i<=100; i++){
  if(i==NUM){
    document.getElementById("output_sequential").innerHTML = "The number is " + NUM;
  }
}
}

let guesses = 0
function binarySearch() {

    let guess = document.getElementById("guess").value;

    if(guess>NUM){
       document.getElementById("output_binary").innerHTML = guess + " is too high!";
       guesses ++;
    }else if(guess<NUM){
      document.getElementById("output_binary").innerHTML = guess + " is too low!";
      guesses ++;
    }else if(guess==NUM){
      document.getElementById("output_binary").innerHTML = guess + " is correct! It took you " + guesses + " guesses. Great job!";
    }
    else if(guess==NUM&& guesses >7){
      document.getElementById("output_binary").innerHTML = guess + " is correct! It took you " + guesses + "! Aim for less than 7 next time! "
    }
    }
    


function bubbleSort(arr) {

  document.getElementById("output_bubble").innerHTML = "before Bubble: " + arr
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {

      if ((arr[j]) > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  document.getElementById("output_bubble").innerHTML += "<br>after Bubble: " + arr

}

  function selectionSort(arr) {
  let min;
  document.getElementById("output_selection").innerHTML = "<br>before Selection: " + arr
  for(let i = 0; i < arr.length-1; i++){
     min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(min != i){
      let temp = arr[i];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  document.getElementById("output_selection").innerHTML += "<br>after Selection: " + arr;

}

function testAll() {
  let arr = [-.1,4,7,6,1651,234,5,-18,9,2,3];
  console.log(selectionSort(arr));
  console.log(bubbleSort(arr));
}

