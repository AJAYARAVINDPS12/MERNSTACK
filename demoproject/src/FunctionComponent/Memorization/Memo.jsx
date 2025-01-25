import { useState } from "react"
import UpdateNumber from "./UpdateNumber"
import UpdateText from "./UpdateText"

const Memo = () => {
    var [num,setNum] =useState(0)
    return (
        <div>
            <h2>This is memo</h2>
            <UpdateNumber value={num}/>
            <button onClick={()=>setNum(num+1)}>+</button>

            <UpdateNumber value={num}/>
            <button onClick={()=>setNum(num+2)}>+</button>
            <UpdateText />
        </div>
    )
}
export default Memo