import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate'
import {useStateVal} from './StateProvider'

function Product(props) {
    const [{basket}, setBasket] = useStateVal()

const addToBasket = () =>{
    setBasket({
        type:'ADD_TO_BASKET',
        item:{
            id:props.id,
            title:props.title,
            image:props.image,
            price:props.price,
            rating:props.rating

        }
    })
   
}


    return (
        <div className="product">

            <div className="product__info" >
                {props.title}
                <p className="product__price">
                    <small>$ </small>
                    <strong>{props.price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(props.rating).fill().map((_) => (

                            <p key={Math.random() * 10}><StarRateIcon className="starrate"/></p>
                        ))
                    }
                </div>

            </div>



            <img src={require(`${props.image}`)} alt="product" />
            <button onClick={addToBasket}>Add to basket</button>


        </div>
    )
}

export default Product
