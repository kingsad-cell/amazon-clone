import React from 'react'
import  "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            ></img>

            {/* Product id, title, rating, image */}
            <div className="home__row">
            <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""
            />
             <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""
            />
            </div>
            
            <div className="home__row">
            <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""
            />
              <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""
            />
              <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""           
            />  
            </div>
            <div className="home__row">
            <Product id="1234"
            title="the lean startup: book"
            price={11.96}
            rating={5}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            alt=""
            />    
            </div>           

        </div>
    );
}

export default Home
