import React from 'react'
import { useStateVal } from '../StateProvider'
import StarRateIcon from '@material-ui/icons/StarRate'
import './CheckoutProduct.css'



function CheckoutProduct(props){
    const [{ basket },setBasket] = useStateVal()


    const removeFromBasket = () => {
        setBasket({
            type: 'REMOVE_FROM_BASKET',
            id: props.id
        })

    }

    return (

        <div className="checkoutProduct" key={props.id}>
            {/* <img classname="checkoutProduct__image" src={require(`${props.image}`) } alt ='Checkout Product'/> */}


            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>

                <p className="checkoutProduct__price">
                    <small>$ </small>
                    <strong>{props.price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(props.rating).fill().map((_) => (

                            <p key={Math.random() * 10}><StarRateIcon className="starrate" /></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>




        </div>
    )
}

export default CheckoutProduct
