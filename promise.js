function promise(f){
    var a;
     return new Promise(function(resolve,reject){
        if(f===1){
            resolve("this is resolve part")
        }
        else if(f===0){
            reject("this is reject part")
        }
    })
    // return a;
}
promise(1).then((res)=>{
console.log("this is a resolve part")
}).catch((rej)=>{
    console.log("this is reject part")
})