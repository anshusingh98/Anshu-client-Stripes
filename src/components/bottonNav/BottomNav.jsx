import React from 'react'
import Buybutton from '../Buybutton'
import IncDec from '../IncDec'
import Navbar from '../Navbar'
import Product from '../Product'
import { useSelector, useDispatch} from 'react-redux'
const BottomNav = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const { product_name, title, desc, sku, Imgs, price } = Product;

  const ProductDetails = {
    product_name: Product?.product_name,
    quantity: quantity,
    price: Product?.price,
    Imgs: Product?.Imgs[0],
  };
  return (
   
    <nav className="navbar navbar-light bg-light fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
    <Buybutton ProductDetails={ProductDetails} /> <IncDec />
  </nav>
  )
}

export default BottomNav