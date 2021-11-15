import React from 'react';
import sports1 from '../../images/gallary/sports1.jpg';
import sports2 from '../../images/gallary/sports2.jpg';
import sports3 from '../../images/gallary/sports3.jpg';
import sports4 from '../../images/gallary/sports4.jpg';
import sports5 from '../../images/gallary/sports5.jpg';
import sports6 from '../../images/gallary/sports6.jpg';
import './Gallery.css';


const Gallery = () => {
    return (
        <div>
            <div className ='container'>
            <h1 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>Other </span>Collection</h1>

                {/* Gallary Photo Album*/}
                <div className= 'row mt-3 border border-2 rounded p-3 gallary'>
                    
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75 border border-3 border-primary rounded-top' src ={sports1}  alt="" />
                        
                    </div>
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75  border border-3 border-success rounded-top' src ={sports2} alt="" />
                        
                    </div>
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75 border border-3 border-danger rounded-top' src ={sports3}  alt="" />
                        
                    </div>
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75 border border-3 border-warning rounded-top' src ={sports4}  alt="" />
                        
                    </div>
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75 border border-3 border-info rounded-top' src ={sports5} alt="" />
                      
                    </div>
                    <div className  = 'col-md-4 pt-4 gallary-img'>
                        <img className ='w-75 border border-3 border-dark rounded-top' src ={sports6}  alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;