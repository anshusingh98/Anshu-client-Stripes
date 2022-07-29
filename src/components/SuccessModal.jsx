import React , {useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import success from '../assets/confirm.png'
import failed from '../assets/cancel.png'

const SuccessModal = () => {
console.log((window.location.href));
const queryParams = new URLSearchParams(window.location.search);
const [Upayment,setUPayment] = useState();
const payment = queryParams.get('payment')
console.log("payment",payment);
useEffect(()=>{
  if(payment)
  { setUPayment("success")}
   else
   {setUPayment("failed")}
},[])
 

  return (
   <div>
         {Upayment==="success"?

       <div class="card" id='card-main' style={{width: "500px",
height: "500px",

background: "#FFFFFF",
borderRadius: "8px",margin:"200px auto",display:"flex",alignItems:"center"}}>
       <div className="cancel" style={{paddingLeft:"400px"}} >X</div>

    <div >
        <img  src={success} alt="alternatetext" style={{width: "100px",
height: "100px",marginTop:"20px"}} />

       </div>
        <p style={{width: "400px",
height: "30px",fontWeight: "700px",
fontSize: "24px",paddingLeft:"19%"}}>purchase Successful</p> 
        <p style={{fontSize:"15px" ,fontWeight:"2px",width: "400px",
height: "120px" ,fontWeight: "300",
fontSize: "18px",paddingLeft:"12px",paddingLeft:"15%",
lineHeight: "30px",}}>  You will get your product soon!<br /> <br /> Get ready to experience the spatial audio with adaptive EQ that tunes music to your ears.</p>
        
      </div>:
      <div class="card" style={{width: "755px",
      height: "442px",
      
      background: "#FFFFFF",
      borderRadius: "8px",margin:"200px auto",display:"flex",alignItems:"center"}}>
          <div >
         
      <img  src={failed} alt="alternatetext" style={{width: "100px",
      height: "100px",marginTop:"20px"}} />
      
             </div>
              <p style={{width: "567px",
      height: "30px",fontWeight: "700px",
      fontSize: "24px"}}>purchase Successful</p> 
              <p style={{fontSize:"15px" ,fontWeight:"2px",width: "567px",
      height: "120px" ,fontWeight: "300",
      fontSize: "18px",paddingLeft:"12px",
      lineHeight: "30px",}}>  You will get your product soon!<br /> <br /> Get ready to experience the spatial audio with adaptive EQ that tunes music to your ears.</p>
              
   </div>}
   </div>
  )
}
export default SuccessModal;