import { Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Product from './Product';
import React from 'react'
import "./productContainer.css"

const ProductContainer = () => {
    const {product_name,title,desc,sku,Imgs,price} = Product;

  return (
    // <div className="container-fluid body-container">
    <div className="row body-container-row">
      <div className="col col-lg-7 discription-section" style={{paddingTop:"35px"}}>
        <div className="discription-section-container">
        <p className="d-none d-lg-block d-kl-block" style={{color:"rgb(165, 162, 162)"}}>{Product.product_type}</p>
          <h1>{product_name}</h1> 
    
          
          <p style={{fontWeight:"lighter"}}>{title}</p>
          <ul>
            {Product?.desc.map((des, index) => {
              return <li key={index}>{des}</li>
            })}
          </ul>
          <div><p className="py-3">{Product?.sku}</p></div>
        </div>
      </div>
      <div className="col col-lg-5 crousel-section ">
      <Swiper
    modules={[Pagination, Autoplay]} pagination={true}  slidesPerView={1} loop autoplay 
    >
    <SwiperSlide className="swiperjs" ><img src={Product?.Imgs[0]} height="400px" alt="slide_img" /></SwiperSlide>
    <SwiperSlide className="swiperjs" ><img src={Product?.Imgs[1]} height="400px" alt="slide_img" /></SwiperSlide>
    <SwiperSlide className="swiperjs" ><img src={Product?.Imgs[2]} height="400px" alt="slide_img" /></SwiperSlide>
    <SwiperSlide className="swiperjs" ><img src={Product?.Imgs[3]} height="400px" alt="slide_img" /></SwiperSlide>
    </Swiper>
      </div>
    </div>
  //  </div>
  )
}

export default ProductContainer


