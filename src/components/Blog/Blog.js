import React from 'react';
import img1 from '../../images/blog/blog1.jpg';
import img3 from '../../images/blog/blog2.jpg';
import img2 from '../../images/blog/blog3.jpg';
const Blog = () => {
    return (
<div className='container'>
<h1 className= 'text-center mt-5 pb-3 fw-bold '>OUR <span className ='text-warning'>BLOG</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top" src ={img1} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Suzuki’s new Gixxer Series now available in Bangladesh</h5>
        <p className="card-text text-start">Country’s Best Sport Bike Manufacturer; Rancon Motorbikes Limited, Suzuki’s New Gixxer Series & 100th Anniversary Limited Edition Bike is Now Available in Bangladesh</p>
        <button className='details'>Read More..</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top" src = {img2} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Suzuki New Gixxer Series 2020 Launch</h5>
        <p className="card-text text-start">Born of Greatness - Introducing the All New Gixxer & Gixxer SF</p>
        <button className='details'>Read More...</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img  className="card-img-top" src ={img3} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>CEMS Motor Show 2019</h5>
        <p className="card-text text-start ">An international motor show, along with concurrent expositions of bikes, commercial vehicles and auto parts, will begin today in the capital to exhibit new products and solutions to the country’s growing consumer class.</p>
        <button className='details'>Read More...</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img  className="card-img-top" src ={img4} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Suzuki Annual Conference 2020</h5>
        <p className="card-text text-start ">Break Through Excellence. will begin today in the capital to exhibit new products and solutions to the country’s growing consumer class.</p>
        <button className='details'>Read More...</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img  className="card-img-top" src ={img5} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Bangladesh cover - Vikings and Suzuki</h5>
        <p className="card-text text-start ">On the occassion of Victory Day, Bangladeshi Band - Vikings and Suzuki Bangladesh paid tribute to one of the proud son's of this country - Ayub Bachchu, by covering his popular song - Bangladesh.</p>
        <button className='details'>Read More...</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img  className="card-img-top" src ={img5} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>ALEX RINS BRINGS SUZUKI A HOME PODIUM IN JAPAN</h5>
        <p className="card-text text-start ">The 2018 Japanese GP took place under sunny skies in front of 55,000 passionate motorbike fans at Twin Ring Motegi.</p>
        <button className='details'>Read More...</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;