import React, { useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';

const MakeAdmin = () => {
    // const [admin, setAdmin] = useState({});
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.name);
        // console.log(e.target.value);
        e.preventDefault();
      };
    

    const handleMakeAdmin = (e) => {
        const user = {email};
        console.log(user);
        fetch('http://localhost:5000/admin',{
            method:'PUT',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
                // setEmail('')
            }
        })
        e.preventDefault();
      }
      
    return (
        <section className=" row">
        <div className=' col-lg-2 col-md-4 col-12 left-site'>
            <Sidebar></Sidebar>    
            </div>
        <div className="col-lg-8 col-md-8 p-4 pr-5" style={{ position: "absolute", left: 280, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Make Admin</h5>
            <form onSubmit={handleMakeAdmin}>
                    <label htmlFor="exampleInputEmail1">Email :</label>
                    <input onBlur={handleOnBlur} type="email" className="form-control" name="email" placeholder="*@gmail.com" />
                    <button type="submit" className="btn btn-secondary mt-3">Make Admin</button>
             </form>
             {/* {success && <h5 className = 'text-success text-center'>Made Admin Successfully !!</h5> } */}
        </div>
    </section>
    );
};

export default MakeAdmin;