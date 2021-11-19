import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Reviews from '../Dashboard/Reviews/Reviews';
import Destination from '../Destination/Destination';
import Expertise from '../Expertise/Expertise';
import Gallery from '../Gallery/Gallery';
import Login from '../Login/Login';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <About></About>
            <Gallery></Gallery>
            <Services></Services>
            <Expertise></Expertise>
            <Blog></Blog>
            <Reviews></Reviews>
            <Login></Login>
            
        </div>
    );
};

export default Home;