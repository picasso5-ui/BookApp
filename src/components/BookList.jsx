
import React, { useEffect, useState ,useContext} from 'react'
import {API_URL} from './Api'
import axios from 'axios'
import { MyContext } from './Context/appContext';
import {Link} from 'react-router-dom'



const BookList = () => {

  const {addFav,favorite, books, setBooks} = useContext(MyContext)

  console.log(favorite);

  useEffect(()=>{
    axios.get(API_URL).then((res)=>{
      console.log(res.data)
      setBooks(res.data)     
    })
  },[])



  return ( 
    <div className='bookList'>
        
      {
        !books[0] ?
        <p> Sorry, there's an error fetching the books </p> :
        books.map((book)=>(
          <div key={book.id} className='book'>
            <div> {book.title} </div>
            <div>
              <Link to= {`/details/${book.id}`}> <img src={book.image_url} /> </Link>
            </div>

            <div>
              <button onClick={() => addFav(book)}> Add to favorite </button>
            </div>

          </div>
        ))
      }         
   </div>      
  );
}
 
export default BookList;