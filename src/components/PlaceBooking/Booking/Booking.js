// import { faClipboardList, faCommentDots, faEdit, faHome, faPlus, faShoppingCart, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (
        <div >
            {/* <h2>Booking</h2>
            <NavLink to='/myBooking'>My Booking</NavLink>
            <NavLink to = '/manageBooking'>Manage All Booking</NavLink>
            <NavLink to ='/addPlace'>Add New Place</NavLink>
            <button onClick ={logOut} className ='btn btn-primary m-3'>Log Out</button>

            <div>
            <h2 className ='text-center text-primary'>User Info</h2>
                <div className="card w-25 mx-auto mt-5" >
                   <img src={user?.photoURL} className="card-img-top" style ={{height:'200px'}} alt="..."/>
                     <div className="card-body">
                     <h4>{user?.displayName}</h4>
                       <p className="card-text">{user?.email}</p>
                    </div>
                 </div>
            </div> */}

<a  class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Dashboard
</a>
<button onClick ={logOut}  class="btn btn-primary ms-4" type="button" >
  Log Out
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <nav class="nav flex-column">
  <NavLink to='/myBooking'>My Booking</NavLink>
  <NavLink to = '/manageBooking'>Manage All Booking</NavLink>
  <NavLink to ='/addPlace'>Add New Place</NavLink>
</nav>
  </div>
  {/* <div  className="sidebar d-flex flex-column  col-md-2 px-4" style={{height:"100vh"}}>
       <Link to="/" className="text-white mt-4">
            <h5><FontAwesomeIcon icon={faHome} />TECH WIZARDS</h5>
        </Link>
      <ul className="list-unstyled py-5">
        <li>
          <Link to="/book" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/bookList" className="text-white">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link to="review" className="text-white">
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Review</span>            
          </Link>
        </li>
         {/* {isAdmin &&  <div> */}
             {/* <div> */}
        {/* <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Order List</span>
          </Link>
        </li>
        <li>
          <Link to ='/addPlace' className="text-white">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add products</span>
          </Link>
        </li>
        <li>
          <Link to="/addBlog" className="text-white">
            <FontAwesomeIcon icon={faEdit} />
            <span>Add Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/makeAdmin" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/manageService" className="text-white">
            <FontAwesomeIcon icon={faThLarge} />
            <span>Manage Service</span>
          </Link>
        </li>
        </div>
        {/* } */}
      {/* </ul> */}
    
</div> 


        </div>
    );
};

export default Booking;