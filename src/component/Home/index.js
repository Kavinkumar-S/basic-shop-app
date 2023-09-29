import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home(){
    
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    const [limit,setLimit]= useState(20);
    const [cart,setCart]=useState([]);
    const [dummystate,setdummystate] =  useState([])
    const [count,setCount] = useState(0);

    useEffect(()=>{
      getProducts();
    },[search,limit])
  
  
    const getProducts=async()=>{
      let response = await axios.get(`https://dummyjson.com/products/search?q=${search}&limit=${limit}&select=id,title,price,thumbnail,category&`)
        console.log("data",response.data)
        setData(response.data)
      }

    const Addproduct = (product)=>{
      let update_product = {...product,counts:1}
      console.log("update_product",update_product);
      setdummystate([...dummystate,update_product])
      let sameproduct = dummystate.map(val=>
        {
          if(val.id === update_product.id){
            console.log(val.counts);
          return {...val,counts:val.counts + 1}  
        }else{
          return update_product
        }
      })
console.log("sameproduct",sameproduct);
      // setCart([...cart,sameproduct])
      setCart(sameproduct)
      // setCart([...cart,product]);


    }
  console.log(cart,"cart");

  return(<>
     <div class="container-fluid">
    
   
    <div class="container">
 <div class="row justify-content-center">
  <div class="col-4 m-4">
    <input type="text"
    onChange={(e)=>{
      setSearch(e.target.value)
    }}
    class="form-control" placeholder="Search here..." aria-label="First name"/>
  </div>
</div>

</div>

<div class="container">
<div class="row justify-content-evenly">
 
 {
 data?.products?.length < 0 ? " ": 
 data?.products?.map(data=>

   <div class="card mb-5" style={{width: "18rem",paddingLeft:"0px",paddingRight:"0px"}}>
  <img src={`${data.thumbnail}`}
   class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.title}</h5>
    <p class="card-text">
    $.{data.price}
       </p>
       <p>
   {data.category}
    </p>
    <div className="d-flex justify-content-between align-items-md-center">
    <a  class="card-link">
      <Link to={`/product/${data.id}`}>

      View Product
      </Link>
      
      </a>
     <a 
     onClick={()=>{
      Addproduct(data)
     }}
     class="btn btn-primary">Add to cart</a>
      </div>  

  </div>
  </div>
 )
} 
 
 

    </div>
<button type="button" class="btn btn-primary"
onClick={()=>{
  setLimit(limit + 10)
}}
>view more</button>



</div>
    </div>
    </>)
}