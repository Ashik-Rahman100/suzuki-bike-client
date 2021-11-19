import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
  const {user} = useAuth();
  const [orders,setOrders] = useState([]);
  
  useEffect(() =>{
    const url = `http://localhost:5000/addBook?email=${user.email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setOrders(data));
  },[]);


  const handleDeleteProduct = (id) =>{
    
    const url = `http://localhost:5000/addBook/${id}`;
    fetch(url, {
      method:"DELETE"
    })
    .then(res =>res.json())
    .then(data =>{
     const proceed = window.confirm('Are You Sure? Deleted Product');
     if(proceed){
      console.log(data.deletedCount);
      if(data.deletedCount>0){
         alert("Delete Successfully");
         const remainingOrders = orders.filter(order =>order._id !==id)
         setOrders(remainingOrders);
         console.log(remainingOrders);
      }
     }
    })
  }
    return (
        <div>
          
            <div className='row'>
          <div>
               
            </div>

          <div className='col-lg-10 col-md-8 col-12'>
          <div>
          <h2 className = 'text-ceneter m-4'>You Have Placed : {orders.length} Orders</h2>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Photo</th>
      <th scope="col">Price</th>
      <th scope="col">State</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody >
    { orders.map((pd) => {
    const {username,name,email,price,url, state} = pd;
    return(
    <tr>
      <td>{username}</td>
      <td>{name}</td>
      <td><img src={url} style={{width:"90px"}} alt="" /></td>   
      <td>{price}</td>
      <td>{<div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
         </div>}</td>
      <td>{email}</td>
      <td><button onClick ={() => handleDeleteProduct(pd._id) } className = 'btn btn-danger'>DELETE</button></td>

    </tr>
    )
    },)}
  </tbody>
</table>
          </div>
          </div>
        </div>
        </div>
    );
};

export default MyOrder;