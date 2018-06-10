// Practice Questions Asignment


// Question 1:
console.log("   This is question-1")
var a=123
var b=456
console.log(a,b)
console.log(">>")


//Question 2:
console.log("   This is question-2")
function multiply( param1, param2 ) 
{
 return param1*param2;
}
console.log(multiply(3,4))
console.log(">>")


//Question 3:
console.log("   This is question-3")
var str1='abc', str2='def'
var str=str1+str2;
console.log(str)
console.log(str.length)
console.log(">>")


//Question 4:
console.log("   This is question-4")
var str = "Please locate where 'locate' occurs!" ;
console.log(str.indexOf('where'))
console.log(str.lastIndexOf('locate'))
console.log(">>")


// Questions 5:
console.log("   This is question-5")
var str = "Please locate where 'locate' occurs!" ;
console.log(str.slice('locate'))
console.log(">>")


// Questins 6:
console.log("   This is question-6")
var str = "Please visit Microsoft!" ;
console.log(str.replace('Microsoft','Google'))
console.log(">>")


//Question 7:
console.log("   This is question-7")
 var text1 = "Hello World!" ;
 console.log(text1)
 console.log(text1.toLowerCase())
 console.log(text1.toUpperCase())
 console.log(">>")


// Question:8
console.log("   This is question-8")
var chars = "population".split('');
console.log(chars)
console.log(">>")


// Question 9:
console.log("   This is question-9")
var fruits = [ "Banana" , "Orange" , "Apple" , "Mango" ]

fruits[4]='Litchi';
console.log(fruits)

// fruits.pop()
// fruits.splice(3)
// console.log(fruits)

fruits[1]='Tomato';
console.log(fruits)

console.log(typeof fruits)

var fruits1 = ["Apple", "Banana", "Carrots"];
console.log(fruits1)
var str = fruits1.toString(fruits1);
console.log(str)
console.log(">>")


// Question 10:
console.log("   This is question-10")
console.log("a->")
var x = 9.656 ;
var str1=x.toString()
console.log("           "+str1)
console.log("b->")
console.log("           "+x.toFixed(2))
console.log(">>")


// Question 11:
console.log("   This is question-11")
var x = 7.65
console.log(Math.round(x))
console.log(Math.sqrt(x))
console.log(">>")


// Question 12:
console.log("   This is question-12")
console.log(Math.random())
console.log("    Random b/w 0 & 99")
console.log(Math.floor((Math.random()*100)))
console.log(">>")


// Question 13: 
console.log("   This is question-13:")
var points = [ 40 , 100 , 1 , 5 , 35 , 10 ];
console.log(points.sort(function(a, b)
{          return a - b
}))



