import "./Singer.css"

export default function Singer ({singer}){
    return(
        <div className="singer">
            <h3>Singer Name: {singer.name}</h3>
            <h3>Age: {singer.age}</h3>
        </div>
    )
}