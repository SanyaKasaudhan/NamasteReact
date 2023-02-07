import { createContext } from "react";
export const fruitContext= createContext({
    fruits:{
        fruit:["mango","apple","banana"],
        qty:1
    }
})