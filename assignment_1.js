// Javascript Assignment


//Question 1:
console.log("   This is question-1")
var x=10101010
console.log(parseInt(x,2))
console.log(">>")


//Question 2:
console.log("   This is question-2")
var dec_to_bin=11
console.log(dec_to_bin.toString(2)); //

var dec_to_hex=124
console.log(dec_to_hex.toString(16));

var dec_to_oct=122
console.log(dec_to_oct.toString(8));
console.log(">>")


//Question 3:
console.log("   This is question-3")
console.log(Math.random())
console.log(">>")


//Question 4:
console.log("   This is question-4")
var roun=34.563738
console.log(roun.toFixed(3))
console.log(">>")

//Question 5:
console.log("   This is question-5")
var arr1 = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0

for (i=0; i<=largest;i++){
    if (arr1[i]>largest) {
        var largest=arr1[i];
    }
}
console.log(largest)
console.log(">>")


//Question 6: 
console.log("   This is question-6")
var arr2 = [14, 58, 20, 67, 42, 4, 77, 66, 82, 42]
var min = Math.min(...arr2)
console.log(min)
console.log(">>")


//Question 7:
console.log("   This is question-7")
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(17,2))
console.log(">>")


//Question 8:
console.log("   This is question-8")
powVar=257
function powerOfTwo(powVar)  
 {
    return (Math.log(powVar)/Math.log(2)) % 1 === 0;
}
console.log(powerOfTwo(powVar))     //returns true or false
console.log(">>")


//Question 9:
console.log("   This is question-9")
var rounVar = 123.23454;
rounVar = rounVar.toFixed(2);
console.log(rounVar)
console.log(">>")


//Question 10:
console.log("   This is question-10 ")

//  To hide email addresses to protect from unauthorized user
console.log('sorry not able to solve this one')
console.log(">>")


//Question 11:
console.log("   This is question-11")
var normalString="hello world"
var uprFirst = normalString.charAt(0).toUpperCase() +normalString.slice(1) 
console.log(uprFirst)
console.log(">>")


//Question 12:
console.log("   This is question-12")
function largerInt(a,b)
{
if (a > b)
 {
    console.log(a +' is greater than ' + b)
}  
else 
{
    console.log(b +'  is greater than  ' + a)
}
}
largerInt(44,55)
console.log(">>")


//Question 13:
console.log("   This is question-13")


console.log(">>")


//Question 14:
console.log("   This is question-14")
function starTree(n)
{
    for(var i=1; i<=n; i++){
        console.log("*".repeat(i));
     }
}
starTree(5)
console.log(">>")


//Question 15:
console.log("   This is question-15")
function combString(str)
{
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;

    while(indexCurrent < lenStr)
    {
        var char = str.charAt(indexCurrent);
        var x;
        var arrTemp = [char];

        for(x in result)
        {
            arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);

        indexCurrent++;
    }

    return result;
}

console.log(combString("abc")); 
console.log(">>")

