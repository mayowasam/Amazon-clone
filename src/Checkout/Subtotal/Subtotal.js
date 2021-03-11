import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateVal } from '../../StateProvider'
import {getBasketTotal} from '../../Hooks/Reducer'


function Subtotal() {
    const [{basket}, setBasket]= useStateVal()


    return (
        <div className="subtotal">
            <CurrencyFormat renderText ={(value) =>(
                <div>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </div>
            )}
                decimalScale={2}
                displayType={'text'}
                value={getBasketTotal(basket)}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>proceed to checkout</button>

        </div> 
    )
}

export default Subtotal
