import { ReactNode, createContext, useContext, useState } from "react";
import * as data from "../data/items.json";


type ProductType = {
    id: number;
    name: string;
    price: string;
    imgUrl?: string;
    measurementUnit?: string;
    description?: string;
    wordsToSale?: string;
}



const ProductsContext = createContext({} as ProductType[]);

export const useProducts = () => {
    return useContext(ProductsContext)
}
type ProductsContextProviderProps = {
    children: ReactNode
}

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {

    const itemsString = JSON.stringify(data);
    const itemsArray: ProductType[] = JSON.parse(itemsString).items

    const [productsList, setProductsList] = useState<ProductType[]>(itemsArray)

    return (
    <ProductsContext.Provider value={ productsList }>
        {children}
    </ProductsContext.Provider>
    )
}