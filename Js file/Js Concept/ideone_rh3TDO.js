let n =4;
let pattern = "";
for(let row = 1; row <= n; row++){
  console.log(row);
  //print spaces
  for(let space = 1; space <= n-row; space++){
    pattern = pattern + " ";
  }
  //print starts
  for(let star = 1; star <= row; star++){
    pattern = pattern + "* ";
  }
  pattern = pattern + '\n';
}
console.log(pattern);

//=================================================
let arr = [0, 1, 0, 1, 1, 0];
let left =0;
let right = arr.length -1;
while(left <= right){
  if(arr[left] == 0){
    left++;
  }
  else if(arr[left] == 1){
    //swap
    let temp = arr[left];
    arr[left]=arr[right];
    arr[right] = temp;
    right--;
  }
}

console.log(arr);


//=================================================



//=================================================

//=================================================