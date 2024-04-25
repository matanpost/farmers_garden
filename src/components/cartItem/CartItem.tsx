import { FC } from "react"
import { useShoppingCartContext } from "../../context/CartContext"
import ItemCard from "./ItemCard";

type Item = {
    id: number;
    name: string;
    price: string;
    imgUrl: string;
    measurementUnit?: string;
}

const CartItem: FC<any> = (items: Item) => {

const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCartContext()



    return (
        <ItemCard />
    )
}

export default CartItem