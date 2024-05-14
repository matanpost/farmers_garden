import { createContext, ReactNode, useContext, useState } from "react";

type CarouselContextType = {
    currentIndex: number;
    goToNextSlide: () => void;
    goToPrevSlide: () => void;
    hello: string
};

type CarouselContextProviderProps = {
    children: ReactNode
}

const CarouselContext = createContext({} as CarouselContextType);

export const useCarousel = () => {
     return useContext(CarouselContext)
    };

export const CarouselProvider = ({ children }: CarouselContextProviderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        console.log('im the next button');
        setCurrentIndex(prevIndex => (prevIndex + 1) % 5); // Assuming 5 slides in total
        const slide = document.querySelector('.slide');
        slide?.appendChild(slide.firstElementChild!);
    };

    const goToPrevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + 5) % 5);
        const slide = document.querySelector('.slide');
        slide?.prepend(slide.lastElementChild!);
    };

    const hello = 'hello';

    return (
        <CarouselContext.Provider value={{ currentIndex, goToNextSlide, goToPrevSlide , hello}}>
            {children}
        </CarouselContext.Provider>
    );
};



// type CarouselContextProviderProps = {
//     children: ReactNode
// }

// type CarouselContextType = {
//     nextButton: any
//     prevButton: any
// }

// const CarouselContext = createContext({} as CarouselContextType)

// export const useCarouselContext= () => {
//     return useContext(CarouselContext)
// }


// export const CarouselProvider = ({ children }: CarouselContextProviderProps) => {
//     let next = document.querySelector('.next')
//     let prev = document.querySelector('.prev')
    
// const nextButton = () => {
//   next !== null ?
//   next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide')?.appendChild(items[0])
//   }) : 
//   console.log('A problem occurred in Next buttun finction');
// }

// const prevButton = () => {
//   prev !== null ?
//   prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide')?.prepend(items[items.length - 1]) 
//   }) : 
//   console.log('A problem occurred in Prev buttun finction');
// }

// }