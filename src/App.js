import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import About from "./components/About";
import BlackNav from "./components/blackNav/BlackNav";
import BottomNav from "./components/bottonNav/BottomNav";
import IncDec from "./components/IncDec";
import OptionNav from "./components/optionNav/OptionNav";
import ProductContainer from "./components/ProductContainer";
import Quantity from "./components/Quantity";
import SuccessModal from "./components/SuccessModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Failed from "./components/Failed";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



const App = () => {
    const queryParams = window.location.href;

  const MySwal = withReactContent(Swal);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log("payment",payment);


 const handleSuccess =()=>{ 
    console.log("success" )
    handleShow()
    MySwal.fire({
      // icon:"success",
      showConfirmButton: true,
      imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/07/Success-PNG-Image.png',
      imageHeight: 100,
      title:'Purchase Successful',
      showCloseButton: true,
      confirmButtonText: `<a href="http://localhost:3000">OK</a>`,
      html:
    '<p style="font-family: Poppins">You will get your product soon!</p><br>' +
    '<p style="font-family: Poppins">Get ready to experience the spatial audio with <br>adaptive EQ that tunes music to your ears.</p>',
      timer:3000,
    })
  }
  const handlefailure =()=>{
    console.log("fail")
    MySwal.fire({
      icon:"error",
      title:'Payment failed',
      timer:3000,
    })
  }
  const pathname = window.location.pathname
  if(pathname === "/success")  {
  handleSuccess();
} 
if(pathname === "/failed")  {
  handlefailure();

} 
  // if(payment===true)
  // {
  //   handleSuccess();
  // }

  return (
    <div className="App">

      <BlackNav />
      <OptionNav />
      <div
        className="container about-container"
        style={{
          height: "101px",
          width: "1920px",
          left: "0px",
          top: "136px",
          borderRadius: " 0px",
        }}
      >
        <About />
        <Quantity />
      </div>
      <ProductContainer />
      <BottomNav />
    </div>
  );
};
export default App;
