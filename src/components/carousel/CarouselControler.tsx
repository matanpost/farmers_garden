import React, { FC } from 'react';
import Carousel from "./Carousel";
import { useProducts } from '../../context/ProductsContext';



const CarouselControler: FC<any> = () => {

  const productsList = useProducts();


  return (

    <Carousel productsList={ productsList } />

  );
}

export default CarouselControler;
