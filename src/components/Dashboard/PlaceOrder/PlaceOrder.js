import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const{user} = useAuth();
    const { register, handleSubmit,reset } = useForm();

    const [services, setServices] = useState()

    const{id} = useParams();
    
    useEffect(()=>{
        fetch('https://boiling-reaches-53434.herokuapp.com/products')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    console.log(services);
    const matchService = services?.find(service =>service?._id === id);


    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addBook', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('add to Successfully');
                reset();
            }
        })
    };
    // onSubmit={handleSubmit(onSubmit)}
    return (
        <div className= 'mt-5 pt-4'>
            
            <form onSubmit={handleSubmit(onSubmit)} className = 'mt-5 pd-3'>
            <input className ="form-control w-50 mx-auto" defaultValue={matchService?.title}  {...register("name" )} /> <br />
            <input className ="form-control w-50 mx-auto" defaultValue={user.email} type="email" {...register("email" )} /> <br />
            <input className ="form-control w-50 mx-auto" defaultValue={user.displayName} {...register("username")} /> <br />
            <input className ="form-control w-50 mx-auto" defaultValue={matchService?.price}  {...register("price" )} /> <br />
            <input className ="form-control w-50 mx-auto" defaultValue={matchService?.img}  {...register("url")} /> <br />
            <input className ="form-control w-50 mx-auto"  {...register("state")} placeholder ='Address' /> <br />
                
            <input type="submit" value = 'Place Order'  className = 'btn btn-primary mb-3' />
           </form>
        </div>
    );
};

export default PlaceOrder;