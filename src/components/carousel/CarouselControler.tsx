import React, { FC, PropsWithChildren, ReactNode } from 'react';
import Carousel from "./Carousel";
import { useCarousel } from '../../context/CarouselContext';
import * as data from "../../data/items.json"

const itemsString = JSON.stringify(data);
const items = JSON.parse(itemsString).items


type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl: string;
    measurementUnit?: string;
}


// type CarouselControlerProps<P = unknown> = P & { children?: ReactNode } & {};

const CarouselControler: FC<any> = () => {
  
  const { goToNextSlide, goToPrevSlide, currentIndex, hello } = useCarousel();
  console.log('test: carouselControler');
  
  // let next = document.querySelector('.next')
  // let prev = document.querySelector('#left-arrow')

  // next !== null ?
  // next.addEventListener('click', function(){
  //   let items = document.querySelectorAll('.item')
  //   document.querySelector('.slide')?.appendChild(items[0])
  // }) : 
  // console.log('A problem occurred in Next buttun finction');

  // const nextButton = () => {
  //   let items = document.querySelectorAll('.item')
  //   document.querySelector('.slide')?.appendChild(items[0])
  // }

  // prev !== null ?
  // prev.addEventListener('click', function(){
  //   let items = document.querySelectorAll('.item')
  //   document.querySelector('.slide')?.prepend(items[items.length - 1]) 
  // }) : 
  // console.log('A problem occurred in Prev buttun finction');


  return (
      
      // {items.map(

      // )}
      <Carousel goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} currentIndex={currentIndex} items={items} hello={hello} />
    
  );
}

export default CarouselControler;
