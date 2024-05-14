import { FC, PropsWithChildren } from "react"
import styles from './ProductCard.module.css'
import favorite from '../../../public/images/favorite.png'
import { useShoppingCartContext } from "../../context/CartContext"

type ProductCardProps = PropsWithChildren


type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl: string;
    measurementUnit?: string;
}

const ProductCard: FC<{ items: Item[] }> = ({ items }) => {
    console.log(items);

    const { increaseCartQuantity } = useShoppingCartContext()

    return (<>
        <div>
            {items.map((item: Item) => {
                return (
                    <ul key={item.id}>
                        <li>
                            <img className={styles['item-pic']} src={item.imgUrl} alt="item" />
                        </li>
                        <li>
                            <p>{item.name}</p>
                        </li>
                        <li>
                            <p>{item.price}</p>
                        </li>
                        <li>
                            <button onClick={() => increaseCartQuantity(item.id)}>ADD TO CART</button>
                        </li>
                    </ul>
                )
            })

            }

        </div>
        {/* <section className={styles.product}>
            <div className={styles.productPhoto}>
                <div className={styles['photo-container']}>
                    <div className={styles["photo-main"]}>
                        <div className={styles.controls}>
                            <img className={styles['item-pic']} src="/images/favorite.png" alt="" />
                        </div>
                        <img src={items[0].imgUrl} alt="green apple slice" />
                    </div>
                    {/* <div className={styles["photo-album"]}>
                        <ul>
                            <li><img src="" alt="green apple" /></li>
                            <li><img src="" alt="half apple" /></li>
                            <li><img src="" alt="green apple" /></li>
                            <li><img src="" alt="apple top" /></li>
                        </ul>
                    </div> */}
        {/* </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.title}>
                    <h1>Delicious Apples</h1>
                    <span>COD: 12345</span>
                </div>
                <div className={styles.price}>
                    R$ <span>7.93</span>
                </div>
                <div className={styles.variant}>
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li>
                    </ul>
                </div>
                <div className={styles.description}>
                    <h3>DETAILS</h3>
                    <ul>
                        <li>Apples are nutricious</li>
                        <li>Apples may be good for weight loss</li>
                        <li>Apples may be good for bone health</li>
                        <li>They're linked to a lowest risk of diabetes</li>
                    </ul>
                </div>
                <button className={styles.buyBtn}>ADD TO CART</button>
            </div>
        </section> */}
        <section>
            <div className={styles.card}>
                <div className={styles.card__title}>
                    <div className={styles.icon}>
                        <a href="#"><i className={styles['fa fa-arrow-left']}></i></a>
                    </div>
                    <h3>New products</h3>
                </div>
                <div className={styles.card__body}>
                    <div className={styles.half}>
                        <div className={styles.featured_text}>
                            <h1>Nurton</h1>
                            <p className={styles.sub}>Office Chair</p>
                            <p className={styles.price}>$210.00</p>
                        </div>
                        <div className={styles.image}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt="" />
                        </div>
                    </div>
                    <div className={styles.half}>
                        <div className={styles.description}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
                        </div>
                        <span className={styles.stock}><i className={styles['fa fa-pen']}></i> In stock</span>
                        <div className={styles.reviews}>
                            <ul className={styles.stars}>
                                <li><i className={styles['fa fa-star']}></i></li>
                                <li><i className={styles['fa fa-star']}></i></li>
                                <li><i className={styles['fa fa-star']}></i></li>
                                <li><i className={styles['fa fa-star']}></i></li>
                                <li><i className={styles['fa fa-star-o']}></i></li>
                            </ul>
                            <span>(64 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className={styles['card__footer']}>
                    <div className={styles.recommend}>
                        <p>Recommended by</p>
                        <h3>Andrew Palmer</h3>
                    </div>
                    <div className={styles.action}>
                        <button type="button">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>

        <section>

            <div className={styles.container3}>
                <div className={styles.row}>
                    <div className={`${styles.left} ${styles['col-md-6']}`}>
                        <i className={`${styles.fa} ${styles['fa-arrow-left']}`} aria-hidden="false"></i>
                        <img className={styles.productPhoto} src="https://media.ldlc.com/r1600/ld/products/00/05/00/34/LD0005003477_2.jpg" alt="product"/>
                        <i className={`${styles.fa} ${styles['fa-arrow-right']}`} aria-hidden="true"></i>
                    </div>
                    <div className={`${styles.right} ${styles['col-md-6']}`}>
                        <h4 className={styles.categorie}>Gaming headset</h4>
                        <h3 className={styles.product}>Steelseries Arctis 7</h3>
                        <ul className={styles.desc}>
                            <li>Lag-Free Wireless Gaming Headset</li>
                            <li>DTS Headphone : X 7.1 Surround Sound</li>
                            <li>ClearCast, the Best Mic in Gaming</li>
                        </ul>
                        <div className={styles.color}>
                            <p className={styles['title-colour']}>Color : <span className={styles.blackwhite}>Black</span></p>
                            <i className={`${styles['color-black']} ${styles['fa-check']} ${styles.fa}`}aria-hidden="true"></i>
                            <i className={`${styles['color-white']} ${styles['fa-check']} ${styles.fa}`} aria-hidden="true"></i>
                        </div>
                        <p className={styles.price}>€179.99</p>
                        <p className={styles.buy}>Buy now</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default ProductCard

