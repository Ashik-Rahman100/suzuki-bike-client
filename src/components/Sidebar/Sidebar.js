import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className= 'bg-black' style ={{height:'100vh'}}>
                  <h4 className='text-warning'>DASBORD</h4>
                    <div className='dashbord'>
                    <NavLink className='text-white text-decoration-none fw-bold' to='/myorder'>My Order</NavLink><br/>
                    <NavLink className='text-white text-decoration-none fw-bold' to ='/addReview'>Review</NavLink><br/>
                    <NavLink className='text-white text-decoration-none fw-bold' to = '/payment'>Payment</NavLink><br/>
                    <NavLink className='text-white text-decoration-none fw-bold' to ='/addPlace'>Add Product</NavLink><br/>
                    <NavLink className='text-white text-decoration-none fw-bold' to ='/makeAdmin'>Make Admin</NavLink><br/>
                    </div>
                </div>
    );
};

export default Sidebar;