import React,{useContext} from 'react';
import BookList from './BookList';
import { MyContext } from './Context/appContext';



const Favorites = () => {
     const {favorite,removeFav,setFavorite} = useContext(MyContext)

   
    return ( 
        <div>
        {favorite.map((book)=>(
            <div key={book.id}>
               <div>{book.title}</div>
               <div><img src={book.image_url} /></div>
               
             <div>
             <button onClick={() => removeFav(book.id)}>Remove from favorite</button>
             </div>

                </div>
           ))}
        </div>
     );
}
 
export default Favorites;