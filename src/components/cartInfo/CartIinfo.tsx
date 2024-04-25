import { FC, useState } from "react"
import styles from './Cartinfo.module.css'
import shoppingCrart from '../../assets/shoppingCart.png'
import CartInfoCard from "../cartItem/CartItem"

const CartInfo: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick: any | null = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    };

    return (
        <div className={`${styles.dropdown}, ${isOpen ? styles.isOpen : ''}`} >
            <button onClick={handleClick} className={styles.button} >
                <img src={shoppingCrart} alt="cart" />
            </button>
            <div className={styles['cart-info']}>
                <CartInfoCard/>
            </div>
        </div>
    )
}

export default CartInfo