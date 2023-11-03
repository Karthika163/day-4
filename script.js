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
var arr = ["car", "bus","car","train"]
function getDuplicates(data)
{
  return data.filter((value,index)=> data.indexOf(value)!==index);
}
console.log(getDuplicates(arr));

// covert all the string titles to caps
function caps(arr){
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for (var i=0;i<data.length;i++)
    {
     return data[i] = data[i].charAt(0).toUpperCase()+ data[i].slice(1);
    }return data.join(" ")
}
    console.log(caps(["tHis IS jAvAsCrIpT"]));

    //uber
    class  UberPrice{
        constructor(kilometer,price=50)
    {
        this.kilometer = kilometer;
        this.Price = price;
    } get price(){
        return this.kilometer*this.price;
    }
    }var uber1 = new UberPrice(5);
    var uber2 = new UberPrice(5,125);
    console.log(uber1.Price);
    console.log(uber2.Price);


    //find median of two arrays
    const arr1 = [1,2,3,4]
const arr2 =  [2,4,6,8]
function Median (arr1,arr2){
    let arr = [...arr1,...arr2]
    arr.sort((a,b)=> a-b)
    let n = Math.floor(arr.length/2);
    return arr.length%2===0 ? (arr[n/2+n/2-1]/2) : arr[Math.floor(n/2)]
}
console.log(median (arr1,arr2));

//rotate an array k times
const arr = [1,3,4,6,7]
const k  = 3;
(function (arr,k) {
    for(var i=0;i<k;i++){
         arr.push(arr.shift())
    }console.log(arr);
})(arr,k);












  

    


  

    

