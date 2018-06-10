//           Question set-1

console.log(">>")
console.log("              REGEX ->")


// Question 1:
console.log(">>")
console.log("   This is question-1")
var word = "Capital";
console.log( word[0] === word[0].toUpperCase());
console.log(">>")


// Question 2:
console.log("   This is question-2")
var strOnly='fm7567fghj'  
var strExp = /^[a-zA-Z0-9_\-]*$/

if(typeof strOnly=='string')
{
    if(strExp.test(strOnly))
    console.log("String accepted")
    else 
    console.log("String not accepted")
}
else
console.log("Only strings are allowed")

console.log(">>")


// Question 3:
console.log("   This is question-3")
var numStr=12343567
var numRegex = /^[0-9]*$/

if(numRegex.test(numStr))
console.log("String accepted")
else
console.log("String not accepted")
console.log(">>")


// Question 4:
console.log("   This is question-4")
var url='www.facebook.com'
var urlRegex=/^[a-z0-9]+\.[a-zA-Z0-9]+\.[a-z]{2,6}|(\.[a-z]{2-3})?$/

if(urlRegex.test(url))
console.log("Accecpted")
else
console.log("Not accepted")
console.log(">>")


// Question 5:
console.log("   This is question-5")
var hexColor=0x123
var hexRegex=/^(0x)|(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/

if(hexRegex.test(hexColor))
console.log("Accecpted")
else
console.log("Not accepted")
console.log(">>")





console.log("              OBJECTS")


// Question 6:
console.log(">>")
console.log("   This is question-6")

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
    };
    console.log(student)

    delete student.rollno;
    
    console.log(student)
console.log(">>")


// Question 7:
console.log("   This is question-7")
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
    };
   console.log("Length of object is:")
    console.log(Object.keys(student).length)

console.log(">>")


// Question 8:
console.log("   This is question-8")

console.log("Not done")
console.log(">>")



console.log("             ARRAYS")


// Question 9:
console.log(">>")
console.log("   This is question-9")

var array1 = ['20','220','111','215','54','78'];
array1.sort(function(a,b){
    return b-a;
});

console.log(array1[1]);
console.log(">>")


// Question 10:
console.log("   This is question-10")
var a1=[1,2,3];
var a2=[100,2,1,10];

function union_arrays (x, y) 
{
    var obj = {};
    for (var i = x.length-1; i >= 0; -- i)
       obj[x[i]] = x[i];
    for (var i = y.length-1; i >= 0; -- i)
       obj[y[i]] = y[i];
    var res = []
    for (var k in obj) {
      if (obj.hasOwnProperty(k))  // <-- optional
        res.push(obj[k]);
    }
    return res;
  }
console.log(union_arrays([1,2,3],[100,2,1,10]))
console.log(">>")

// Question 11:
console.log("   This is question-11")

var a1=[1,2,3];
console.log(Array.isArray(a1))

var aa='drfghjnk'
console.log(Array.isArray(aa))
console.log(">>")


// Question 13:
console.log("   This is question-13")

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

console.log(item + " ( " + mf + " times ) ");
console.log(">>")


// Question 14:
console.log("   This is question-14")
var array = [1, 2, 3, 4, 5],
    sum = 0,
    prod = 1,
    i;
for (i = 0; i < array.length; i ++) 
   {
    sum += array[i];
    prod *= array[i];
    }
console.log('Sum : '+sum + ' Product :  ' +prod); 
