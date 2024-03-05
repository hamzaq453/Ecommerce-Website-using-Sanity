'use client'

import { ReactNode } from "react"
import { CartProvider as CartProviderr} from "use-shopping-cart"

export default function CartProvider({children}:{children:ReactNode}){
    return (
        <CartProviderr
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="http://localhost3000/success"
        cancelUrl="http://localhost3000/error"
        currency="USD"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-US"
        >

       {children}
        </CartProviderr>
    )
}