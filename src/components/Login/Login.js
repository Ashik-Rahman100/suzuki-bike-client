import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,loginWithEmailAndPassword,setUser} = useAuth();

    const location = useLocation();
    const history = useHistory();

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // handle email
    const handleGetemail = (e) =>{
        setEmail(e.target.value);
    }

    // handle password
    const handleGetPassword = (e) =>{
        setPassword(e.target.value);
    }

    //  email and password login
    const handleLoginWithEmailAndPassword = (e) =>{
        loginWithEmailAndPassword(email,password)
        .then((res) => {
            // Signed in 
            const user = res.user;
            setUser(user)
            history.push(redirect_uri)
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
                  
    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }

    return (
        <div className ='mb-4'>
            <h1 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>CONTACT </span>US</h1>
            <div className='w-75 mx-auto rounded p-5 mt-4' style= {{backgroundColor:'tomato'}}>
            <div className= 'w-75 mx-auto ' >
                <div >
                    <h2 className = 'text-white text-center'>Please LogIn</h2>
                    
                <form onSubmit = {handleLoginWithEmailAndPassword}>
                    <label className= 'fw-bold text-white' htmlFor="">Email: </label>
                    <input onBlur ={handleGetemail} className='form-control' type="email" name="" id="" placeholder='Enter Your Email' required /><br />
                     <label className= 'fw-bold text-white' htmlFor="">Password: </label>
                    <input onBlur={handleGetPassword}  className='form-control' type="password" name="" id="" placeholder='Enter Your Email' required/><br />
                    <input className ="details" type="submit" value="login" />
                    <button onClick= {signInUsingGoogleLogin} className= 'details'>Google Sign in</button>
                 </form>
                </div>
            </div>
            <div>
            

            <p className ='text-white'>Are You New User? <Link to= '/register'>Please Register Now</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Login;