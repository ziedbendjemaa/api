import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListCard from './ListCard'
import NavBar from './NavBar'

const UserList = () => {
    const [user, setUser] = useState([])

useEffect(()=>  {
    let  getuser=async()=>{
        try {

            let res= await axios.get("https://jsonplaceholder.typicode.com/users")
            setUser(res.data)
        } catch (error) {
            console.log(error)
            
        }
    }
    getuser()
    
}, [])
const [text, setText] = useState("")
    return (
        <div>
            <NavBar text={text} setText={setText}/>
        <div className="container">
        <div className="row ml-5">
            {
                user.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())).map((el,i)=><ListCard users={el} key={i}/>)
            }
        </div>
        </div>
        </div>
    )
}

export default UserList
