import React from 'react'
import success from '../assets/confirm.png'
const SuccessModal = () => {
  return (
   <div>
       <div class="card" style={{borderRadius:"10px",height:"300px",width:"300px",background:"#F8FAF5",margin:"200px auto",display:"flex",alignItems:"center"}}>
    <div >
    <img src={success} alt="alternatetext" style={{height:"8vw",width:"8vw",marginTop:"20px"}} />
       </div>
        <h6>purchase Successful</h6> 
        <p style={{fontSize:"15px" ,fontWeight:"2px" ,marginTop:"10px",marginLeft:"2px"}}>  Get ready to experience the spatial audio with adaptive EQ that
                tunes music to your ears.</p>
        
      </div>
   </div>
  )
}

export default SuccessModal;