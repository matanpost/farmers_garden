import { FC } from "react"
import { useShoppingCartContext } from "../../context/CartContext"
import CartItemCard from "./CartItemCard";
import * as data from "../../data/items.json"

const itemsString = JSON.stringify(data);
const items = JSON.parse(itemsString).items
console.log(items);

type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl: string;
    measurementUnit?: string;
}

type CartItemsList = {
    id: number
    quantity: number
}

const CartItem: FC<any> = () => {

    const { cartItemsList, cartItemsNumber, increaseCartQuantity, decreaseCartQuantity, removeFromCart, getItemQuantity } = useShoppingCartContext()

    console.log(items);

    const cartItems: Item[] = items.filter((item: Item) =>
        cartItemsList.some(cartItem => cartItem.id === item.id)
    );

    
    return (
        <ul>
            {cartItems.length ? (
                cartItems.map(item => (
                    <li key={item.id}>
                        <CartItemCard item={item} increaseCartQuantity={increaseCartQuantity} removeFromCart={removeFromCart} decreaseCartQuantity={decreaseCartQuantity} quantity={getItemQuantity(item.id)}/>
                    </li>
                ))
            ) : (<>
                <p>No items in the cart.
                </p>
                <a href=""> explore our products</a>
            </>
            )}
        </ul>
    )
}

export default CartItem