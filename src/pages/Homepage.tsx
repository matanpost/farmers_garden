import React, { FC, PropsWithChildren } from 'react';
import CarouselControler from "../components/carousel/CarouselControler";
import styles from './Homepage.module.css'
import { CarouselProvider } from '../context/CarouselContext';

type HompageProps = PropsWithChildren & {}

const Homepage: FC<HompageProps> = () => {
  return (
    <CarouselProvider>

      <CarouselControler />
    </CarouselProvider>
  );
}

export default Homepage;
