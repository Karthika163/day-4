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
var a = function (arr1){
    for(var i=0;i<arr1.length;i=i+1){
        if(arr1[i]%2!==0){
            result.push(arr1[i])
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]))

// //arrow 
// //print odd numbers in array
var result = [];
var odd=(arr2)=>{
    for(var i=0;i<arr2.length;i=i+1){
        if(arr2[i]%2!==0){
            result.push(arr2[i])
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))


// //Sum of all numbers in an array
function test(...rest)
{
    let sum = 0;
    for(i=0;i<rest.length;i++){
    sum=sum+rest[i];
}
return sum;
}
console.log(test(2,3,4,1));


//prime number or not
var n = 7;
var count = 0;
for(var i =0;i<=n;i++)
{
    if(n%i==0)
    
    {
        count++
    }
} 
 if(count===2) 
{
    console.log("Prime Number");
}
else
{
console.log("Composite Number");
    
}

//Return all the palindromes in an array
function Palindrome(str) { 
  var rev=str.split("").reverse().join(""); 

  if(rev == str){ 
      return true
  } 
  return false
               
} 

var str1 = "dad"; 
var str2 = "sis"; 
var str3 = "sasi"; 

console.log(Palindrome(str1)); 
console.log(Palindrome(str2)); 
console.log(Palindrome(str3));

//Remove duplicates from an array
var arr4 = ["car", "bus","car","train"]
function getDuplicates(data)
{ 
  return data.filter((value,index)=> data.indexOf(value)!==index);
}
console.log(getDuplicates(arr4));

// covert all the string titles to caps
function caps(arr5){
    var res1 = arr5.toString();
    var data = res1.toLowerCase().split(" ");
    for (var i=0;i<data.length;i++)
    {
     return data[i] = data[i].charAt(0).toUpperCase()+ data[i].slice(1);
    }
    return data[i].join(" ")
}
    console.log(caps(["tHis"]));

    //find median of two arrays
    const arr9 = [1,2,3,4]
const arr7 =  [2,4,6,8]
function Median (arr9,arr7){
    let arr8 = [...arr9,...arr7]
    arr8.sort((a,b)=> a-b)
    let n = Math.floor(arr8.length/2);
    return arr8.length%2===0 ? (arr8[n/2+n/2-1]/2) : arr8[Math.floor(n/2)]
}
console.log(Median (arr9,arr7));

//rotate an array k times
const arr3 = [1,3,4,6,7]
const k  = 3;
(function (arr3,k) {
    for(var i=0;i<k;i++){
         arr3.push(arr3.shift())
    }console.log(arr3);
})(arr3,k);



//Sum of all numbers in an array
 function test(a,...rest){
    let sum = 0;
    for (var i=0;i<rest.length;i++)
    {
        sum = sum+rest[i];
    }return sum;
 } console.log(test(1,2,3,4,5));










  

    


  

    

