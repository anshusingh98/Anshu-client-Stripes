import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSelector } from 'react-redux';
import Product from './Product';
const Buybutton = ({ProductDetails}) => {
    
    const stripePromise = loadStripe("pk_test_51LQBWPSC6p91jwLUNC6B5r4KvTWCqeylON5XdtIQls9Hzy3RSTRAIvUfNRZcBiwRAXHzRxcqpXAeu1unbTmjl2zo00oSiSkj0X")
 const handleCheckout =  async () =>{
   const stripe = await stripePromise
   try {
     const res = await axios({url:"http://localhost:8080/create-checkout-session",method:"post",data:ProductDetails})
     const session = res.data
     const result = await stripe.redirectToCheckout({sessionId:session.id})
     if(result.error)
     {
       console.log(result.error)
     }
   } catch (error) {
    console.log(error)

   }

 }
  return (
    <div> 
        <button class="btn btn-primary" type="submit"  onClick={() => handleCheckout()} style={{borderRadius:"20px" ,marginLeft:"5vh", height:"35px"}}>Buy Now</button>
    </div>
  )
}

export default Buybutton