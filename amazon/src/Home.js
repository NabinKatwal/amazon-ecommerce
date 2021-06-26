import React from 'react'
import './Home.css'

import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4288684220_.jpg' alt='banner' />
            </div>

            <div className='home__row'>
                <Product
                    id='12321341'
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={5}
                />
                <Product
                    id='49538094'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5-Litre Glass Bowl'
                    price={239.0}
                    image='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg'
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='4903850'
                    title="Samsung LC49RG90SSUXEN 49' LED Gaming Monitor"
                    price={599.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
                    rating={3}
                />
                <Product
                    id='23445930'
                    title="Amazon Echo(4th Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71yEX4ugtJL._AC_SL1000_.jpg'
                    rating={5}
                />
                <Product
                    id='3254354345'
                    title="New Apple iPad Pro(12.9 inch, Wi-Fi, 128GB) - Silver(4th Generation)"
                    price={598.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg'
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='90829332'
                    title="Samsung Odyssey 49-in Gaming G9 Computer Monitor LC49G97TSSNXDC"
                    price={700.0}
                    image='https://images-na.ssl-images-amazon.com/images/I/61oVYpKCOIL._AC_SL1200_.jpg'
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
