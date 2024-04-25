import { FC, PropsWithChildren } from "react"
import * as data from "../../data/items.json"
import CartItem from "../cartItem/CartItem";

const itemsString = JSON.stringify(data);
const items = JSON.parse(itemsString).items
console.log(items);

type CartItemsSectionProps = PropsWithChildren & {}

export const CartItemsSection: FC<CartItemsSectionProps> = ( items ) => {
    



    return(<>
    <h1>CART</h1>
        <CartItem items={items}/>
    </>   
    )
}