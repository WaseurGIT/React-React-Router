import { useEffect, useState } from "react"
import Photo from "./Photo"

export default function Photos(){
    
    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    },[])

    return(
        <>
            <h3>Total Photos: {photos.length}</h3>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
        </>
    )
}