"use client"
import { useEffect, useState } from "react"
export default function Page({params}){
    let id = params?.userid
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const getUserDetails =async ()=>{
       let data = await fetch(`http://localhost:3000/api/users/${id}`)
       data= await data.json()
       setName(data.result.name)
       setAge(data.result.age)
       setEmail(data.result.email)
    }

    const update = async()=>{
        let result = await fetch(`http://localhost:3000/api/users/${id}`,{
            method:"PUT",
            body: JSON.stringify({name,age,email})
        })
        result = await result.json()
    }
    useEffect(()=>{
        getUserDetails()
    },[])

    return(
        <div>
            <h1>
                Update user details
            </h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e?.target?.value)}}/>
            <input type="text" placeholder="Enter your age" value={age} onChange={(e)=>{setAge(e?.target?.value)}}/>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e?.target?.value)}}/>
            <button onClick={update}>Update</button>

        </div>
    )
}