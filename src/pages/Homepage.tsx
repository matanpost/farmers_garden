import React, { FC, PropsWithChildren } from 'react';
import Carousel from "../components/carousel/Carousel";
import Navbar from '../components/navbar/Navbar';
import bgp from '../assets/farmer-in-field.jpeg'
import styles from './Homepage.module.css'

type HompageProps = PropsWithChildren

const Homepage: FC<HompageProps> = () => {
  return (
    <section>
      <Carousel></Carousel>
    </section>
  );
}

export default Homepage;
