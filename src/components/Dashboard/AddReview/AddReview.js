import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('add to Successfully');
                reset();
            }
        })
    };
    return (
        <div>
            <div className='row'>
          <div className=' col-lg-2 col-md-4 col-12 left-site'>
            <Sidebar></Sidebar>    
            </div>

          <div className='col-lg-10 col-md-8 col-12'>
          <div>
          <h2 className ='text--center fw-bold '>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  className ="form-control w-50 mx-auto" {...register("name")} placeholder ='Name' /> <br />
                <input className ="form-control w-50 mx-auto" {...register("image", { required: true })} placeholder="image url"/> <br />
                <input className ="form-control w-50 mx-auto" type="number" {...register("rating" , { required: true })} placeholder="rating Number" /> <br />
                <textarea className ="form-control w-50 mx-auto" {...register("feedback", { required: true })} placeholder="feedback"></textarea> <br />
               <input type="submit" className = 'btn btn-primary' />
           </form>
          </div>
          </div>
        </div>
        </div>
    );
};

export default AddReview;