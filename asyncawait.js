async function asAw(){
    setTimeout(()=>{
        console.log("Inside TimeOut")
    },5000)
    return "This is async/await example"
}
console.log(asAw())