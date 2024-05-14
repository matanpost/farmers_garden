/* eslint-disable no-useless-concat */
import { FC, PropsWithChildren } from "react"
import styles from "./Carousel.module.css"
import rightArrow from '../../assets/arrow_forward.png'
import leftArrow from '../../assets/arrow_back.png'
import { useCarousel } from "../../context/CarouselContext"
import * as data from "../../data/items.json"

const itemsString = JSON.stringify(data);
const items = JSON.parse(itemsString).items

type CarouselProps = {
    goToNextSlide: () => void
    goToPrevSlide: () => void
    currentIndex: number
    items: Item[]
    hello: string
}

type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl?: string;
    measurementUnit?: string;
}

const Carousel: FC<any> = () => {
    
    const { goToNextSlide, goToPrevSlide, currentIndex } = useCarousel();

    console.log(currentIndex);

    return (
        <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.slide}>
                {items.map((slide: Item, index: number) => (
                    <div key={index} className={index === currentIndex ? [styles.item, styles.active].join(' ') : styles.item} >
                        { index === currentIndex ? 'true': 'false' }
                        
                    <div className={styles.content}>
                        <div className={styles.name}>{slide.name}</div>
                        <div>avocado is healthy and it is a good ingredient to make stuff</div>
                        <button>Go to product</button>
                    </div>
                </div>
                )
                )}
                
                {/* <div className={[styles.item, styles.active].join(' ')}>
                    <div className={styles.content}>
                        <div className={styles.name}>Tulips</div>
                        <div>avocado is healthy and it is a good ingredient to make stuff</div>
                        <button>Go to product</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <div className={styles.name}>Ginger</div>
                        <div>avocado is healthy and it is a good ingredient to make stuff</div>
                        <button>Go to product</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <div className={styles.name}>Rabarber</div>
                        <div>avocado is healthy and it is a good ingredient to make stuff</div>
                        <button>Go to product</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.content}>
                        <div className={styles.name}>Mushrooms</div>
                        <div>avocado is healthy and it is a good ingredient to make stuff</div>
                        <button>Go to product</button>
                    </div>
                </div> */}
            </div>
        </div>
        <div className={styles.button}>
            <button onClick={() => goToNextSlide()} className={styles.prev}><img src={leftArrow} alt="left-arrow" /></button>
            <button onClick={goToPrevSlide} className={styles.next}><img src={rightArrow} alt="right-arrow" /></button>
        </div>
        </section>

    )
}

export default Carousel;