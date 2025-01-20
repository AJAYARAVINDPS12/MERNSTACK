// async function asAw(){
//     setTimeout(()=>{
//         console.log("inside timeout")
//     },5000)
//     return await "this is async/await"
// }
// asAw().then(function(output){
// console.log(output)
// })
//instagram example
commentpost =async ()=>{
    var com=new Promise((res)=>{
        setTimeout(()=>{
            res("commented the post");
        },5000)
        
    })
    return com;
}
likepost=async ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res("liked post");
        },2000)
        
    })
}
async function createpost(){
    var post =new Promise((res)=>{
        setTimeout(()=>{
            res("created post");
        },1000)
        
    })
    //it takes 5 sec
    var [post,like,comment]= await Promise.all([post,likepost(),commentpost()])
    console.log(post)
    console.log(like)
    console.log(comment)
    // console.log(await post);//it takes 8 sec
    // console.log(await likepost());
    // console.log(await commentpost());
}
 createpost();