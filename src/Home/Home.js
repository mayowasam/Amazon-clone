import React from 'react'
import './Home.css'
import Product from '../Product';
import SlideThree from '../images/slide/slide 3.jpg'
import ImageOne from '../images/products/img1.jpg'
import ImageTwo from '../images/products/img2.jpg'
import ImageThree from '../images/products/img3.jpg'
import ImageFour from '../images/products/img4.jpg'
import ImageFive from '../images/products/img5.jpg'
import ImageSix from '../images/products/img6.jpg'


// const fadeImages = [
//     './images/slide1.jpg',
//     "./images/slide 2.jpg",
//     "./images/slide 3.jpg",
//     "./images/slide 4.jpg"
// ];

function Home() {

    return (
        <div className="home">

            <img className="home__image" src={SlideThree} alt="home" />
            <div className="home__row">
                <Product
                    id={1}
                    title='Full Bedding with Bedsheets '
                    price={1170.85}
                    image={ImageOne}
                    rating={4}
                />

                <Product
                    id={12}
                    title='Amazon Black Electrical Dustbin'
                    price={30.95}
                    image={ImageTwo}
                    rating={3}
                /> 


            </div>


             <div className="home__row">
                <Product
                    id={3}
                    title='Green Spring Irish Cleanser '
                    price={8.00}
                    image={ImageThree}
                    rating={2}
                />

                <Product
                    id={4}
                    title='Comfortable Office Chair with Hydraulic Spring'
                    price={199.99}
                    image={ImageFour}
                    rating={1}
                />

                <Product
                    id={15}
                    title='Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon '
                    price={10.59}
                    image={ImageFive}
                    rating={5}
                />
            </div>


            <div className="home__row">
                <Product
                    id={4}
                    title='blender'
                    price={400.35}
                    image={ImageSix}
                    rating={4}
                />

            
            </div>








        </div >


    )
}






export default Home
