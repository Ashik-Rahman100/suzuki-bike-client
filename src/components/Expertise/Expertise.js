import React from 'react';
import team1 from '../../images/team/team1.jpg';
import team2 from '../../images/team/team2.jpg';
import team3 from '../../images/team/team3.jpg';

const Expertise = () => {
    return (
<div className='container mt-4 pb-3'>
<h1 className= 'text-center mt-5 pb-3 fw-bold'>CONTACT<span className ='text-warning'>US</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img className="card-img-top rounded-circle" src ={team1} alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Jonathon Doe</h4>
        <p className="card-text" style={{color:'tomato'}}>Manager</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top rounded-circle" src ={team2} alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Jessica Jui</h4>
        <p className="card-text" style={{color:'tomato'}}>Asistant Manager</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top rounded-circle" src ={team3} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Monalisa Lui</h5>
        <p className="card-text" style={{color:'tomato'}}>Asistant Manager</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Expertise;