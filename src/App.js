import React ,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlackNav from "./components/blackNav/BlackNav";
import BottomNav from "./components/bottonNav/BottomNav";
import Navbar from "./components/Navbar";
import OptionNav from "./components/optionNav/OptionNav";
import ProductContainer from "./components/ProductContainer";
import SuccessModal from "./components/SuccessModal";

const App = () => { 
  return (
    
    <div className="App">
      <BlackNav />
      <OptionNav />
      <Navbar />
      <ProductContainer />
      <BottomNav />
    </div>
  );
};
export default App;