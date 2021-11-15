import React from 'react';
import about from '../../images/about.png';
import './About.css';
const About = () => {

    return (
        <div >
            <div className = "container mt-5 text-start">
            <h1 className= 'text-center m-4 fw-bold'>About<span className ='text-warning'> US</span> </h1>
            <div className = 'row' >
                <div className = 'col-md-6 col-12'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 100%, 45%)'}}>SUZUKI</h2>
                    <h1 className ='fw-bold mt-3'>ECONOMICAL & COMFORTABLE</h1>
                    <p>RANCON Motor Bikes Ltd. (RMBL), the only Manufacturer and country distributor of SUZUKI Motor Corporation – Japan for their world-renowned SUZUKI Motorcycles. RMBL is one of the most prominent ventures of the RANCON Group and a premier conglomerate of Bangladesh. The journey of RMBL commenced in the summer of 2012 with a team of only three. The first shipment of bikes was due to arrive in the following summer and was sold out months before arrival. Since then, just like in other countries around the globe, owning a Suzuki motorcycle in Bangladesh has become a privilege. Fast forward to 2018, with a team of 360, Suzuki Bangladesh has successfully started its own fully equipped Manufacturing Plant of over 140,000sft in Gazipur, Bangladesh. Since then, it has created a prominent footprint in the motorcycle industry of Bangladesh by being a Manufacturer of Motorcycles. </p>
                    <div className="">
                        <button className ='read-more fw-bold'> Read More...</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12 mb-4'>
                    <img className ='img-fluid mt-5' src={about} alt="" />
                </div>
            </div>
          </div>
        </div>
    );
};

export default About;