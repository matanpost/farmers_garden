import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItemsList = {
    id: number
    quantity: number
}

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}


const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [cartItemsList, setCartIetmsList] = useState<CartItemsList[]>([])

    const getItemQuantity = (id: number): number => {
        return cartItemsList.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number): void => {
        setCartIetmsList(currentItemsList => {
            if (currentItemsList.find(item => item.id === null) == null) {
                return [...currentItemsList, {id, quantity: 1}]
            } else {
                return currentItemsList.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number): void => {
        setCartIetmsList(currentItemsList => {
            if (currentItemsList.find(item => item.id === null)?.quantity === 1) {
                return currentItemsList.filter(item => item.id !== id)
            } else {
                return currentItemsList.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number): void => {
        setCartIetmsList(currentItemsList => {
            return currentItemsList.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }} >
        {children}
    </ShoppingCartContext.Provider>
}