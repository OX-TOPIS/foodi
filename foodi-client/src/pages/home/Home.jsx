import React from 'react'
import Banner from '../../components/Banner'
import Category from './Category'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <SpecialDishes/>
      <Testimonials/>
    </div>
  )
}

export default Home
