/* eslint-disable no-useless-concat */
import { FC, useRef } from "react"
import styles from "./Carousel.module.css"
import rightArrow from '../../assets/arrow_forward.png'
import leftArrow from '../../assets/arrow_back.png'
import { ProductType } from "./Item"

type CarouselProps = {
    productsList: ProductType[]
}

const Carousel: FC<CarouselProps> = ({productsList }) => {

    const el = useRef<HTMLDivElement | null>(null);
    let currentIndex = 0;

    const handleNextSlide = () => {
        const slide = el.current;
        !slide ? console.log('element with class slide was not selected')
            :
            slide?.appendChild(slide.firstElementChild!);
    };

    const handlePrevSlide = () => {
        const slide = el.current;
        !slide ? console.log('element with class slide was not selected')
            :
            slide?.prepend(slide.lastElementChild!);
    };
    console.log(currentIndex);
    console.log(el.current);

    return (
        <section className={styles.section} >
            <div className={styles.container}>
                <div className={styles.slide} ref={el} >
                    {productsList.map((slide: ProductType, index: number) => (
                        <div key={index} className={index === currentIndex ? [styles.item, styles.active].join(' ') : styles.item} style={{ backgroundImage: `url(${slide.imgUrl})` }}>
                            {/* {index === currentIndex ? 'true' : 'false'} */}

                            <div className={styles.content}>
                                <div className={styles.name}>{slide.name}</div>
                                <div>{slide.wordsToSale}</div>
                                <button>Go to product</button>
                            </div>
                        </div>
                    )
                    )}

                </div>
            </div>
            <div className={styles.button}>
                <button onClick={handleNextSlide} className={styles.prev}><img src={leftArrow} alt="left-arrow" /></button>
                <button onClick={handlePrevSlide} className={styles.next}><img src={rightArrow} alt="right-arrow" /></button>
            </div>
        </section>

    )
}

export default Carousel;