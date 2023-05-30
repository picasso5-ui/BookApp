import React, { useState,useContext } from 'react'
import BlogList from './components/BookList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import { MyContext } from "./components/Context/appContext";
import Favorites from './components/Favorites'
import BookDetails from './components/BookDetails'


function App() {

const [favorite, setFavorite] = useState([]);
const[books, setBooks] = useState([]);


const addFav =(book)=>{
  const duplicate = favorite.filter(each => each.id == book?.id);
  if(duplicate[0]) {
    alert('book alreay in favorite')
    return
  }
  setFavorite(prev => [...prev, book]);
}

const removeFav =(id)=>{
  setFavorite(favorite.filter(each => each.id !== id));
}

  return(
    <div>
    <MyContext.Provider value={{addFav,favorite,removeFav,setFavorite,books, setBooks}}>
   
    <Navbar />
    <Routes>
    <Route path='/' element={ <BlogList />} />
    <Route path='/favorites' element={<Favorites /> } />
    <Route path='/details/:id' element={<BookDetails /> } />

   
    </Routes>
   
    </MyContext.Provider>
     <Footer/>
    
    
    </div>

  )
  
}

export default App
