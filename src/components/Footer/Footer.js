import img2 from "../../images/destination/cruiser.jpg";
import img1 from '../../images/destination/scooter.png';
import img3 from '../../images/destination/sports.png';
import img4 from '../../images/destination/super_sports.png';
import './Footer.css';
const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="left-container text-start">  
                           <h3>Suzuki Bike Store</h3>
                            <h5>All The Information You Need</h5>
                            <p>On our blog, you’ll discover in-depth resources and guidance that’ll help you navigate every step of your car buying process.</p>
                            <button className='footer-btn'>Visit</button>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <h2>Pages</h2>
                            <ul className="footer-menu">
                                <li className="menu">Home</li>
                                <li className="menu">Products</li>
                                <li className="menu">About</li>
                                <li className="menu">Login</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className='footer-gal'>Products</h2>
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='gallery-img' src={img1} alt="" />
                        </div>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='gallery-img' src={img2} alt="" />
                        </div>                        
                    </div> 
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='gallery-img' src={img3} alt="" />
                        </div>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='gallery-img' src={img4} alt="" />
                        </div>
                    </div>                                  
                    </div>
                    <div className="col-md-3">
                        <div className="contact-us">
                            <h2>Contact Us</h2>
                            <p><small>&& By-now the better car.</small></p>
                             <input className='form-control mt-5'  type="text" placeholder ='please enter your email' />
                             <h5 className= 'text-start text-warning'>Phone : +66 223 7900 24</h5>
                             <div className ='address text-start'>
                                 <p>Patukhali,Barishal, Bangladesh</p>
                                <p>812, Dhaka, Bangladesh</p>
                                <p>B6, Green Road</p>

                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer-n'> Suzuki-bike-store © . All rights reserved.</p>
        </div>
    </div>
    );
};

export default Footer;