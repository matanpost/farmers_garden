import { FC, PropsWithChildren } from "react"
import CartItem from "../cartItem/CartItem";



type CartItemsSectionProps = PropsWithChildren & {}

export const CartItemsSection: FC<CartItemsSectionProps> = ( ) => {
    



    return(<>
    <h1>CART</h1>
        <CartItem />
    </>   
    )
}