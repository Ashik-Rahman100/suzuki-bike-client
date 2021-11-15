import React from 'react';
import cruiser from '../../images/destination/cruiser.png';
import scooter from '../../images/destination/scooter.png';
import sports from '../../images/destination/sports.png';
import superSports from '../../images/destination/super_sports.png';
import './Destination.css';


const Destination = () => {

    return (
        <div className='conatiner destination-container text-white p-4'>
            <h2 className= 'text-center pt-3'>DISCOVER  <span className ='text-warning fw-bold'><br /> THE SUZUKI RANGE</span> </h2>
              <div className="row pt-3">
               <div className='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {cruiser}  alt="" />
                   <h4 className ='mt-3'>CRUISER</h4>
               </div>
               <div className= 'col-md-3 col-12'>    
                   <img className = 'img-fluid' src = {sports} alt="" />
                   <h4 className ='mt-3'>SPORTS</h4>
               </div>
               <div className ='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {scooter}  alt="" />
                   <h4 className ='mt-3'>SCOOTER</h4>
               </div>

               <div className ='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {superSports}  alt="" />
                   <h4 className ='mt-3'>SUPER SPORTS</h4>
               </div>
                
             </div>
        </div>
    );
};

export default Destination;