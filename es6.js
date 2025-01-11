// ecma script standard 6
var a = 10
const con = 3.14
console.log(a)
console.log(con)
{
    var a = 20
    let b = 30
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(con)


//class and object 

/*class ClassEg{
    constructor(){
        this.a = 10
    }
    // arrow function
    funInClass = () => {
        console.log(this.a)
    }
}
obj = new ClassEg()
obj.log(obj.funInClass())
console.log(obj.a)*/

//ternary operator

a = 10
console.log(a%2==0)?"Even":"Odd";

//spead operator

a = [10,20,30,40]
b = [50,60,70]
c = [...b,a]
console.log(b,a);

//rest operator

function restOpEg(a,b,...arg){
    console.log(a)
    console.log(b)
    console.log(arg)
}
restOpEg(10,20,30,40,50)

//destructing operator

var array = [10,20,30]
var [a,b,c,d] = array
console.log(a,b,c,d)

//hoisting

console.log(a)
var a = 10
console.log(b)
var b = 20