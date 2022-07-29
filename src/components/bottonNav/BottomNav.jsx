import React from 'react'
import Buybutton from '../Buybutton'
import IncDec from '../IncDec'
import Product from '../Product'
import { useSelector, useDispatch} from 'react-redux'
import Quantity from '../Quantity'
const BottomNav = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const { product_name, title, desc, sku, Imgs, price } = Product;

  const ProductDetails = {
    product_name: product_name,
    quantity: quantity,
    price: price,
    Imgs: Imgs,
  };
  return (
  <>
    <nav className="navbar navbar-light bg-light fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
<Buybutton ProductDetails = {ProductDetails}/>
  </nav>
        </>
  )
}

export default BottomNav