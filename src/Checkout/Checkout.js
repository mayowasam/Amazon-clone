import React from 'react'
import { useStateVal } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal/Subtotal'
import SlidePic from '../images/slide/slide 4.jpg'
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateVal()


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={SlidePic} />

                {
                    (basket.length === 0) ?
                        <div>
                            <h2>Your basket is empty</h2>
                            <p>you have to add  an item </p>
                        </div> : basket.map(basketItem => {
                            console.log(basketItem)
                            return (
                                <div>
                                    <h2 className="checkout__title">Your Shopping Basket</h2>
                                    <CheckoutProduct
                                        id={basketItem.id}
                                        title={basketItem.title}
                                        image={basketItem.image}
                                        price={basketItem.price}
                                        rating={basketItem.rating}

                                    />
                                </div>

                            )
                        }
                        )
                }

            </div>


            {
                (basket.length > 0) && <div className="checkout__right">
                   <Subtotal/>
                </div>
            }



        </div>
    )
}

export default Checkout
