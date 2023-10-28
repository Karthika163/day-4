//print odd numbers in array
// IIFE function
var result = [];
function odd(arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))



//annonyms
//print odd numbers in array
var result = [];
var a = function (arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]))

// //arrow 
// //print odd numbers in array
var result = [];
var odd=(arr)=>{
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))


//Sum of all numbers in an array
var a = (b,c,d) => {return b+c+d}
console.log(a(1,2,3));

//Return all the prime numbers in an array
var result = [];
var prime=(arr)=>{
  for(var i = 1;i<=arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))


//Return all the palindromes in an array
function isPalindrome(str) { 
  var rev=str.split("").reverse().join(""); 

  if(rev == str){ 
      return true
  } 
  return false
               
} 

var str1 = "dad"; 
var str2 = "sis"; 
var str3 = "sasi"; 

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));

//Remove duplicates from an array
var arr = ["car", "bus","car","train"]
function getDuplicates(data)
{
  return data.filter((value,index)=> data.indexOf(value)!==index);
}
console.log(getDuplicates(arr));







  

    


  

    

