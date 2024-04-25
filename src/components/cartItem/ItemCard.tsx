import { FC } from "react"
import styles from './ItemCard.module.css'
import trashcan from '../../assets/delete_FILL0_wght400_GRAD0_opsz24.png'
import avocado from '../../assets/avocado-basket.webp'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'


type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl: string;
    measurementUnit?: string;
}

const CartItem: FC<any> = ({ items }) => {


    return (
        <div className={styles['card-container']}>
            <img className={styles['item-pic']} src={avocado} alt="item pic" />
            <div className={styles['number-calc']}>
                <button className={styles.button}>
                    <img src={plus} alt="plus" />
                </button>
                <p className={styles.number}>1</p>
                <button className={styles.button}>
                    <img src={minus} alt="minus" />
                </button>
            </div>
            <p>10€/k</p>
            <button className={styles.button}>
                <img src={trashcan} alt="trashcan" />
            </button>
        </div>
    )
}

export default CartItem