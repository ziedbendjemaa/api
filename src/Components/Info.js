import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Info = ({match}) => {
    const [user, setUser] = useState([])
    useEffect(() => {
       let getOnusers=async()=>{
           try {
               let res=await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
setUser(res.data)

           } catch (error) {
               console.log(error)
           }
       }
       getOnusers()
    }, [match.params.id])
    return (
        <div >
             <div className="user-info" style={{marginLeft:"50px"}}>
            <h1 style={{color:"white",fontSize:"35px",fontFamily:"sans-serif"}}>{user.name}</h1>
            
            <h3 style={{color:"white",fontSize:"25px",fontFamily:"sans-serif"}}>{user.phone}</h3>
            <h3 style={{color:"white",fontSize:"25px",fontFamily:"sans-serif"}}>{user.street}</h3>
            
        </div>
        <Link to="/">
        <button style={{backgroundColor:"rgb(100, 15, 15)",color:"white", width: "100px",height: "40px", marginTop: "150px",borderRadius:"4px"}}>Back</button>
        </Link>
        </div>
    )
}

export default Info
