import { FC } from "react"
import styles from './CartItemCard.module.css'
import trashcan from '../../assets/delete_FILL0_wght400_GRAD0_opsz24.png'
import avocado from '../../assets/avocado-basket.webp'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import { useShoppingCartContext } from "../../context/CartContext"


type CartItemCardProps = {
    item: {
        id: number;
        name: string;
        price: string;
        imgUrl: string;
        measurementUnit?: string;
    },
    increaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    quantity: number
}

const CartItemCard: FC<CartItemCardProps> = ({ item, increaseCartQuantity, removeFromCart, decreaseCartQuantity, quantity }) => {


    return (
        <div className={styles['card-container']}>
            <img className={styles['item-pic']} src={item.imgUrl} alt="item pic" />
            <div className={styles['number-calc']}>
                <button onClick={() => increaseCartQuantity(item.id)} className={styles.button}>
                    <img src={plus} alt="plus" />
                </button>
                <p className={styles.number}>{quantity}</p>
                <button className={styles.button}>
                    <img onClick={() => decreaseCartQuantity(item.id)} src={minus} alt="minus" />
                </button>
            </div>
            <p>{item.price}</p>
            <button className={styles.button}>
                <img onClick={() => removeFromCart(item.id)} src={trashcan} alt="trashcan" />
            </button>
        </div>
    )
}

export default CartItemCard