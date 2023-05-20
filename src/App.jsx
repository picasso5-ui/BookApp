import React, { useState,useContext } from 'react'
import BlogList from './components/BookList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import { MyContext } from "./components/Context/appContext";
import Favorites from './components/Favorites'


function App() {

const [favorite,setFavorite] = useState([])

const addFav =(book)=>{
   const oldFav= [...favorite]
   const newfav= oldFav.concat(book)
   setFavorite(newfav)
}

const removeFav =(id)=>{
   const oldFav= [...favorite]
   const newfav= oldFav.filter((fav)=>fav.id !==id)
   setFavorite(newfav)
}

  return(
    <div>
    <MyContext.Provider value={{addFav,favorite,removeFav,setFavorite}}>
   
    <Navbar />
    <Routes>
    <Route path='/' element={ <BlogList />} />
    <Route path='/favorites' element={<Favorites /> } />
   
    </Routes>
   
    </MyContext.Provider>
     <Footer/>
    
    
    </div>

  )
  
}

export default App
