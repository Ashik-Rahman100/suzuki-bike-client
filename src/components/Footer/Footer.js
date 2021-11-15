import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../images/Footer/footer.jpg';

const Footer = () => {
    return (
        <div className=' mt-4 '>
            <footer>
            <div>
              <div className="card bg-dark text-white">
                 <img   className="card-img mt-5" src={footer} style ={{height:'65vh'}}   alt="..."/>
                 <div className="card-img-overlay">
                     <div>
                     
                     </div><hr />
                     
                     <div>
                        <div className='row'>
                           <ul className=' fs-5 col'>
                               <Link className='text-decoration-none ms-2 text-danger' to='/home'>Home</Link>
                               <Link className='text-decoration-none ms-2' to='/about'>About</Link>
                               <Link className='text-decoration-none ms-2' to='/gallery'>Gallery</Link>
                               <Link className='text-decoration-none ms-2' to='/services'>Services</Link>
                               <Link className='text-decoration-none ms-2' to='/blog'>Blog</Link>
                               <Link className='text-decoration-none ms-2' to='/trainers'>Trainers</Link>
                           </ul>
                        </div><hr />
                        <div className='col'>
                        <div className="input-group mb-3 w-50 mx-auto">
                           <input type="text" className="form-control " placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                           <button className="btn btn-outline-warning" type="button" id="button-addon2">Sign In</button>
                          </div>
                        </div>
                        <div>
                            <h2 className='text-center'>Follow Us</h2>
                            <div>
                            {/* icon */}

                            </div>
                        </div>
                        <hr />
                        <div>
                         <div className="copyRight text-center">
                             <p className="text-secondary">Suzuki Bike store {(new Date()).getFullYear()} All Rights Reserved</p>
                         </div>
                        </div>
                     </div>
             </div>
           </div>
        </div>
            </footer>
           
        </div>
    );
};

export default Footer;