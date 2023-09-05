import React, { useState } from 'react'
import Header from './Header'
import BannerSection from './BannerSection'
import CategorySection from './CategorySection'
import OutdoorPlantSection from './OutdoorPlantSection'
import Seeds from './Seeds'
import Cart from './Cart'
import Footer from './Footer'

function Main() {
    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
        <Header cart={cart}/>
      <BannerSection />
      <CategorySection />
      <OutdoorPlantSection  addToCart={addToCart}/>
      <Seeds/>
      <section className="cart" id="cart">
      <Cart cartItems={cart} />
      </section>
      <Footer/>
    </div>
  )
}

export default Main