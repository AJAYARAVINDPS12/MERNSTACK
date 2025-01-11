//for in loop

var a = [10,20,30]
var b = {"count":70, "abs":1}
for(let i in a){
    console.log(i)
}
for(let i in b){
    console.log(i,b[i])
}
set = new Set(["hello",1.2,"SECE","44",2,"hello","SECE",5])
for(let i in set){
    console.log("loop is running")
    console.log(i)
}

//for of
 /*for (let i of b){
    console.log(i)
 }*/