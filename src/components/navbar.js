import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/movies">Home</Link>
  <button
   className="navbar-toggler"
    type="button"
     data-toggle="collapse"
      data-target="#navbarNav"
       aria-controls="navbarNav"
        aria-expanded="false"
         aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
  
}
 
export default NavBar;














// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import Movies from './movies';
import Customers from './customers';
import Rentals from './rentals';

// const NavBar = () => {
//   return ( 
//     <nav className="navbar navbar-expand-lg navbar-dark">
//       <Link className="navbar-brand" to="/">Movies</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <div className="navbar-nav">
//           <NavLink to="/movies" className="nav-item nav-link">Movies</NavLink>
//           <NavLink to="/customers" className="nav-item nav-link">Customers</NavLink>
//           <NavLink to="/rentals" className="nav-item nav-link">Rentals</NavLink>
//         </div>
//       </div>
//     </nav>
//    );
// }
 
// export default NavBar;