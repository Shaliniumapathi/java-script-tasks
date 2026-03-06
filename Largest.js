function largest(arr){
    let max =Math.max(...arr);
    let min =Math.min(...arr);
   
   console.log("maximunm value is:",max);
console.log("minimum value is : ",min);
}

console.log(largest([1,2,3,78]));