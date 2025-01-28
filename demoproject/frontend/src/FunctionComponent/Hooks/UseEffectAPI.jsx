import { useEffect,useState } from "react"
import axios from 'axios'
const UseEffectApi = ()=>{
    var [post,setPost] = useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            setPost(res.data)
        }).catch((err)=>console.log(err))
        
    },[])
    return(
        <div>
            <h2>this page is ment for userEffect with API</h2>
            <h3>the content inside my jsonplaceholder API posts </h3>
            <ol>
                {post.map((element)=>(
                    <li key={element.id}> {element.title}</li>
                ))}
            </ol>
        </div>
    )
}
export default UseEffectApi;