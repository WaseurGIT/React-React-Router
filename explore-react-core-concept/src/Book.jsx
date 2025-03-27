import "./Book.css"

export default function Book({book}){
    return(
        <div className = "book" >
           <h3>Book Name: {book.name}</h3> 
           <h3>Book Price: {book.price}</h3> 
        </div>
    )
}