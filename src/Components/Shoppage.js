import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addtocart, deletetocart } from '../Redux/actions/cartactions';



const Shoppage = ({setcartselection,cartselection}) => {
  const [shoplist,setshoplist]=useState([]);
  // const dispatch=useDispatch();
  // const staten=useSelector(state=>state);

useEffect(()=>{
async function apicall()
{
  let a=await axios.get("https://dummyjson.com/products");
  setshoplist(a.data.products);
  console.log(a.data.products);
}
apicall();
},[])


function handleaddtocart(items)
{
// dispatch(addtocart(items));
// console.log(staten);
// setcartselection([...cartselection,items]);
}

  return (
    <div className='shop'>
      <div className="heading">
      <h1>All Items</h1>
      </div>
     
    <div className="products">
   {
    shoplist&&shoplist.map((items)=>(<div className='product'>
    <img  src={items.thumbnail} alt="hello" />
    <div className="description">
    <p>Title:{items.title}</p>
    <p>Title:${items.price}</p>
    </div>
  
    <button   onClick={handleaddtocart(items)} className='addtocartbtn'>Add To Cart</button>
    </div>))

   }
   </div>
    </div>
  )
}

export default Shoppage
