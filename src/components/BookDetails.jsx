import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "./Context/appContext";

const BookDetails = () => {

    const { id } = useParams();
    const { books } = useContext(MyContext);
    const book = books.filter(each => each?.id == id)[0];

    if(!book) {
        return <p> Sorry, Book not found! </p>
    }

    return ( 
        <div className="detail-cont">   
            <img src={book?.image_url} />
            <h1> {book?.title} </h1>
            <p> <strong> Authors: </strong> {book?.authors} </p>
            <br />
            <p> <strong> Description: </strong> {book?.description} </p>
            <br/>
            <p> <strong> Edition: </strong> {book?.edition} </p>
        </div>
    );
}
 
export default BookDetails;