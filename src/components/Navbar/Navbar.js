import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.svg';
import './Navbar.css';

const Navbar = () => {
   const{user, logOut} = useAuth();
  

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark  " >
             <div className="container-fluid">
                 <img className=' img ms-3 rounded-circle' src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle  navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item mb-2">
                    <Link to='/home'>HOME</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to ='/about'>ABOUT</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to ='/gallery'>GALLERY</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to ='/services'>SERVICES</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to='/trainers'>CONTACT SELLER</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to='/blog'>BLOG</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to='/dashbord'>DASHBOARD</Link>
                 </li>
                 <li className="nav-item mb-2">
                    <Link to ='/login'>CONTACT</Link>
                 </li>
               </ul>
               <div className='row w-25 mx-auto'>
                  <div className ='col'>
                  {/* <span className='text-white pe-2'>name: {user?.displayName}</span> */}
                  <p className='text-white pe-2 fw-bold'> {user?.email}</p>
                            
                  </div>
                  <div className ='col'>
                  {
                  user?.email?
                  <button onClick = {logOut} className='btn btn-danger'>Log Out</button>:
                  <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                   }
                  </div>
               </div>
            </div>
          </div>
         </nav>
        </div>
    );
};

export default Navbar;