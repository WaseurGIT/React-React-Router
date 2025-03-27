export default function Photo({photo}){

    const {id, title, thumbnailUrl} = photo

    return(
        <>
            <h3>Photo Id: {id}</h3>
            <h3>Photo Title: {title}</h3>
            <img src={thumbnailUrl} style={{width: "50px" , height:"50px"}} alt={title} />
        </>
    )
}