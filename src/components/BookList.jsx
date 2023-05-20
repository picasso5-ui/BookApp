
import React, { useEffect, useState ,useContext} from 'react'
import {API_URL} from './Api'
import axios from 'axios'
import { MyContext } from './Context/appContext';



const BookList = () => {

  const {addFav,favorite,setFavorite} = useContext(MyContext)
  const[books,setBooks] = useState([]);

console.log(favorite);

  useEffect(()=>{
       axios.get(API_URL).then((res)=>{
           
               console.log(res.data)
               setBooks(res.data)
           
       })
  },[])

    return ( 
        <div className='bookList'>
        
            {books.map((book)=>(
             <div key={book.id}>
                <div>{book.title}</div>
                <div><img src={book.image_url} /></div>
                
              <div>
              <button onClick={addFav(book)}>Add to favorite</button>
              </div>

                 </div>
            ))}
            
           
                  
            
                  
                 </div>
                  


                
             
             
        
        
     );
}
 
export default BookList;