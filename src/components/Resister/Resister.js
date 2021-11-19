import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Resister = () => {
    const {signInUsingGoogle, signInUsingEmailPassword,setUser, updateName} = useAuth();
    const location = useLocation();
    const history = useHistory();
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // name handler
    const handleGetName = (e) =>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    // email handler
    const handleGetEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    // password handler
    const handleGetPassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
  
    // Registration email and password
    const handleRegistration = (e) =>{
        console.log(email, password);
        signInUsingEmailPassword(email, password)
        .then((res) => {
            // Signed in 
            updateName(name)
            const user = res.user;
            setUser(user)
            history.push(redirect_uri);
            window.location.reload()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        e.preventDefault();
        
    }



    const redirect_uri = location.state?.from || '/home';
 
    // google sign in
    const signInUsingGoogleLogin = () =>{
       signInUsingGoogle()
       .then((res) => {
                // console.log(result.user);
                const user = res.user;
                setUser(user);
                history.push(redirect_uri);
                window.location.reload()
              })
    }
    return (
        <div className ='mb-4'>
             <h1 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>CONTACT </span>US</h1>
            <div className='w-75 mx-auto rounded p-5 mt-4' style= {{backgroundColor:'black'}}>
            <div className= 'w-75 mx-auto ' >
                <div >
                    <h2 className = 'text-white text-center'>Please Register</h2>
                    
                    <form onSubmit ={handleRegistration}>
                       <label className= 'fw-bold text-white' htmlFor="">Name: </label>
                        <input onBlur ={handleGetName} className='form-control' type="text" name="" id="" placeholder='Enter Your Name' required /><br />
                        <label className= 'fw-bold text-white' htmlFor="">Email: </label>
                        <input onBlur ={handleGetEmail}  className='form-control' type="email" name="" id="" placeholder='Enter Your Email' required /><br />
                       <label className= 'fw-bold text-white' htmlFor="">Password: </label>
                       <input onBlur ={handleGetPassword} className='form-control' type="password" name="" id="" placeholder='Enter Your Email' required/><br />
                       <button  className= 'details'>SignIn</button>
                       <button onClick= {signInUsingGoogleLogin} className= 'details ms-2'>Google Sign in</button>
                    </form>
                    <div>
                </div>
                </div>
            </div>
            <div>
            <p className ='text-white'>Are You Already Register? <Link to= '/login'>Please Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Resister;