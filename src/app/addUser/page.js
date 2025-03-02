"use client"
import { useState } from "react"
export default function Page(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const addUser = async ()=>{
       let response = await fetch("http://18.213.5.239:3000/api/users",{
        method:"Post",
        body:JSON.stringify({name,email,age})
       })
       response = await response.json()
    }
    return(
        <div>
            <h1>
                Add new user
            </h1>
            <input type="text" value={name} placeholder="Enter your name" onChange={(e)=>{setName(e?.target?.value)}}/>
            <input type="text" value={age} placeholder="Enter your age"  onChange={(e)=>{setAge(e?.target?.value)}}/>
            <input type="text" value={email} placeholder="Enter your email"  onChange={(e)=>{setEmail(e?.target?.value)}}/>
            <button onClick={()=>{addUser()}}>Add user</button>
        </div>
    )
}
