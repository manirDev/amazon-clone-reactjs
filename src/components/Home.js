import React from 'react'
import "./Home.css"
import Product from  "./Product"
function Home() {
    return (
        <div className="home">
            <img 
            className="home_img"
            src="https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/FR-FR_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV4._CB661903789_.jpg" 
            alt=""/>
            {/*Product id title price rating image */}
            {/* row one */}
            <div className="home_row">
            <Product
               id="12321341"
               title="Dr. Elsey's Premium Clumping Cat Litter"
               price={18.99}
               rating={2}
               image="https://images-na.ssl-images-amazon.com/images/I/61po%2BblqBuL._AC_SL1000_.jpg" 
            />
            <Product
               id="12321341"
               title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price={239}
               rating={3}
               image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" 
            />
            </div>
            {/* row two */}
            <div className="home_row">
            <Product
               id="12321341"
               title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
               price={199.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
            />
            <Product
               id="12321341"
               title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
               price={98.99}
               rating={4}
               image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
            />
             <Product
               id="12321341"
               title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
               price={598.99}
               rating={3}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
            />
            </div>
            {/* row 3 */}
            <div className="home_row">
            <Product
               id="12321341"
               title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
               price={1094.98}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
            />
            </div>
            {/*Product */}
        </div>
    )
}

export default Home
