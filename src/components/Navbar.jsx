
import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
        <Link to='/'><h1>React BooksApp</h1></Link>
        <Link to='/favorites'><h3>Your Favorites</h3></Link>
        </div>
     );
}
 
export default Navbar;