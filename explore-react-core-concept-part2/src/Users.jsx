import { useEffect, useState } from "react"

export default function Users () {
    
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return(
        <>
            <h3>Total Users: {users.length}</h3>
        </>
    )
}

/**
 * 1. declare a useState to hold the data
 * 2. useEffect with callback and dependencies
 * 3. use fetch to load data
 */