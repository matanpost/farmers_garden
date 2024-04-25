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
        <section className={styles.product}>
            <div className={styles.productPhoto}>
                <div className={styles['photo-container']}>
                    <div className={styles["photo-main"]}>
                        <div className={styles.controls}>
                            <img className={styles['item-pic']} src="/images/favorite.png" alt="" />
                        </div>
                        <img src={items[0].imgUrl} alt="green apple slice" />
                    </div>
                    <div className={styles["photo-album"]}>
                        <ul>
                            <li><img src="" alt="green apple" /></li>
                            <li><img src="" alt="half apple" /></li>
                            <li><img src="" alt="green apple" /></li>
                            <li><img src="" alt="apple top" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.title}>
                    <h1>Delicious Apples</h1>
                    <span>COD: 12345</span>
                </div>
                <div className={styles.price}>
                    R$ <span>7.93</span>
                </div>
                {/* <div className={styles.variant}>
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li>
                    </ul>
                </div> */}
                <div className={styles.description}>
                    <h3>BENEFITS</h3>
                    <ul>
                        <li>Apples are nutricious</li>
                        <li>Apples may be good for weight loss</li>
                        <li>Apples may be good for bone health</li>
                        <li>They're linked to a lowest risk of diabetes</li>
                    </ul>
                </div>
                <button className={styles.buyBtn}>ADD TO CART</button>
            </div>
        </section>
    </>
    )
}

export default ProductCard

