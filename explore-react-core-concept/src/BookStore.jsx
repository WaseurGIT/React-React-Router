import Book from "./Book";

export default function BookStore({books}){
    return(
        <>
        {
            books.map(book => <Book book = {book}></Book>)
        } 
        </>
    )
}