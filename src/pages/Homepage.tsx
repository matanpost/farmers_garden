import React, { FC, PropsWithChildren } from 'react';
import CarouselControler from "../components/carousel/CarouselControler";
import styles from './Homepage.module.css'
import { CarouselProvider } from '../context/CarouselContext';

type HompageProps = PropsWithChildren & {}

const Homepage: FC<HompageProps> = () => {
  return (<div className={styles.homeBody}>
    <CarouselProvider>

      <div className={styles.homeCarousel}>
        <CarouselControler />
      </div>
      <section className={styles.introduction}>
        <h2>Welcome to Farm Fresh</h2>
        <p>Your source for the freshest local home-bodyproduce directly from the farm to your table.</p>
        <p>Our mission is to support local farmers and provide you with high-quality, fresh produce.</p>
      </section>

      <section >
        <h2>Featured Products</h2>
        {/* Add featured products here */}
      </section>

      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <img src="path/to/icon1.png" alt="Browse" />
            <p>Browse our selection of fresh produce</p>
          </div>
          <div className={styles.step}>
            <img src="path/to/icon2.png" alt="Order" />
            <p>Place your order online</p>
          </div>
          <div className={styles.step}>
            <img src="path/to/icon3.png" alt="Delivery" />
            <p>Receive your order at your doorstep</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        {/* Add testimonials here */}
      </section>

      <section className={styles.cta}>
        <h2>Join Our Community</h2>
        <p>Sign up for our newsletter to receive updates and special offers.</p>
        <button className={styles.signupButton}>Sign Up</button>
        <button className={styles.shopButton}>Shop Now</button>
      </section>

      <section className={styles.benefits}>
        <h2>Why Buy Local?</h2>
        <ul>
          <li>Freshness: Get the freshest produce available.</li>
          <li>Support Local Farmers: Help sustain the local economy.</li>
          <li>Sustainability: Reduce your carbon footprint.</li>
        </ul>
      </section>

      <section className={styles.blog}>
        <h2>From Our Blog</h2>
        {/* Add blog posts or articles here */}
      </section>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Email: support@farmfresh.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          {/* Add social media links here */}
        </div>
        <div className={styles.links}>
          <a href="/about">About Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQs</a>
        </div>
      </footer>
    </CarouselProvider>

  </div>);
}

export default Homepage;
