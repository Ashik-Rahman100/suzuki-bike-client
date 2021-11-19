import React, { useRef } from 'react';
import Sidebar from '../../Sidebar/Sidebar';


const AddNewPlace = () => {

    const nameRef = useRef();
    const travellerRef = useRef();
    const priceRef = useRef();
    const disRef = useRef();
    const urlRef = useRef();

    const handleAddPlace = e =>{
        const title = nameRef.current.value;
        const name = travellerRef.current.value;
        const price = priceRef.current.value;
        const dis = disRef.current.value;
        const img = urlRef.current.value;

        const newPlace = {
            title,
            name,price,dis,img
           
        };
        console.log(newPlace);

        fetch('https://boiling-reaches-53434.herokuapp.com/services', {
            method: "POST",
                body:JSON.stringify(newPlace),
                mode:"cors",
                headers: {"content-type":"application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully Added');
                e.target.reset()
            }
        })

        e.preventDefault();
       
    }
    return (
        <div> 
             <div className='row'>
          <div className=' col-lg-2 col-md-4 col-12 left-site'>
            <Sidebar></Sidebar>    
            </div>

          <div className='col-lg-10 col-md-8 col-12'>
          <div>
          <h2 className = 'text-center fw-bold'>Add A New Place</h2>
        
        <form onSubmit = {handleAddPlace} className="w-50 mx-auto bg-dark mt-4 p-5 rounded">

           <input className ='form-control pt-2 mt-2' ref ={nameRef} type="text" placeholder ='Bike Name' />
           <input className ='form-control pt-2 mt-2' ref ={travellerRef} type="text" placeholder ='Brand Name' />
           <input className ='form-control pt-2 mt-2' ref ={priceRef} type="number" placeholder ='Price' />
           <input className ='form-control pt-2 mt-2' ref ={disRef} type="text" placeholder = 'Discription' />
           <input className ='form-control pt-2 mt-2' ref ={urlRef} type="text" placeholder = 'Image Url' />
           <input className =' btn btn-primary mt-2' type='submit' value="Add New Products" />
      </form>
          </div>
          </div>
        </div>

           

        {/* <form action=""></form> */}
        </div>
    );
};

export default AddNewPlace;