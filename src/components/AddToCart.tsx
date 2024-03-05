"use client"
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlToHttpOptions } from "url";
import { urlFor } from "@/app/lib/sanity";

export interface ProductPage{
    name:string,
    description:string,
    price:number,
    currency:string,
    image:any
    
}

export default function AddToCart({currency,description,image,name,price}:ProductPage){
    const {handleCartClick, addItem }=useShoppingCart()
    const product ={
        name: name,
        description:description,
        price:price,
        currency:currency,
        image: urlFor(image).url(),
        id:'abc'
    };
    
    return(
        <Button onClick={()=>{
            addItem(product), handleCartClick()
        }}> Add To Cart </Button>
    )
}