import React from 'react'
import './Home.css'
import Product from '../Product';


// const fadeImages = [
//     './images/slide1.jpg',
//     "./images/slide 2.jpg",
//     "./images/slide 3.jpg",
//     "./images/slide 4.jpg"
// ];

function Home() {

    return (
        <div className="home">

            <img className="home__image" src={require("../images/slide/slide 3.jpg")} alt="home" />
            <div className="home__row">
                <Product
                    id={1}
                    title='Full Bedding with Bedsheets '
                    price={1170.85}
                    
                    image={"./images/products/img1.jpg"}
                    rating={4}
                />

                <Product
                    id={12}
                    title='Amazon Black Electrical Dustbin'
                    price={30.95}
                    image={"./images/products/img2.jpg"}
                    rating={3}
                /> 


            </div>


             <div className="home__row">
                <Product
                    id={3}
                    title='Green Spring Irish Cleanser '
                    price={8.00}
                    image={"./images/products/img3.jpg"}
                    rating={2}
                />

                <Product
                    id={4}
                    title='Comfortable Office Chair with Hydraulic Spring'
                    price={199.99}
                    image={"./images/products/img4.jpg"}
                    rating={1}
                />

                <Product
                    id={15}
                    title='Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon '
                    price={10.59}
                    image={"./images/products/img5.jpg"}
                    rating={5}
                />
            </div>


            <div className="home__row">
                <Product
                    id={4}
                    title='blender'
                    price={400.35}
                    image={"./images/products/img6.jpg"}
                    rating={4}
                />

            
            </div>








        </div >


    )
}






export default Home
