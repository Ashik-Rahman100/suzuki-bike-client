import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Sidebar/Sidebar';
import MyOrder from '../MyOrder/MyOrder';
import './Dashboard.css';


const Dashboard = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (
        <div >

          <div className='row'>
          <div className=' col-lg-2 col-md-6 col-12 left-site'>
            <Sidebar></Sidebar>    
            </div>

          <div className='col-lg-10 col-md-6 col-12'>
          <div>
            <MyOrder></MyOrder>
          </div>
          </div>
        </div>
        </div> 

    );
};

export default Dashboard;