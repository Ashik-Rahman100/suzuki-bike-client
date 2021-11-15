import React from 'react';
import banner2 from '../../images/banner/banner1.jpg';
import banner1 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"    aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active carousel">
            <img  className="d-block w-100 img-fluid" src ={banner1} alt="..."/>
             <div className="carousel-caption d-none d-md-block mb-5">
              <h1 className ='mb-5 fw-bold ' style ={{fontSize:'60px', color:'white'}}>The Street King </h1>
              <h3>MRP BDT 349,950</h3>
              <button className ='my-btn'>Buy Now</button>
            </div>
          </div>
         <div className="carousel-item">
           <img  className="d-block w-100 img-fluid" src ={banner2} alt="..."/>
           <div className="carousel-caption d-none d-md-block">
             <h1>BE A PART OF THE MOVERS <br /> GENERATION!</h1>
             <h3>Suzuki Motors are now at attractive prices.</h3>
             <button className ='my-btn' >Explore Now</button>
           </div>
          </div>
         <div className="carousel-item">
           <img  className="d-block w-100 img-fluid" src ={banner3} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h1 className ='mb-5 fw-bold mb-5' style ={{fontSize:'60px', color:'white'}}>THE NEW CRUISER</h1>

            <p>We are really proud to announce the launch of a completely new motorcycle from Suzuki’s stable, the “INTRUDER ABS Fi”! The Modern Cruiser Intruder offers a perfect combination of modern styling, features and performance.</p>

            <button className ='my-btn' >Explore Now</button>
            
          </div>
       </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
      </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
    </div>
        </div>
    );
};

export default Banner;