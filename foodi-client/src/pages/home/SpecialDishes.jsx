import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../../components/Card';


const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null)
    useEffect(()=>{
            fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const specials = data.filter((item)=> item.category === "popular")
                setRecipes(specials)
            })
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='section-container'>
      <div className="">
        <p className='subtitle'>Special Dishes</p>
        <h2 className='title md:w-96'>Standout Dishes From Our Menu</h2>
      </div>

      <Slider {...settings} >
          {
            recipes.map((item, i)=> (
              <div key={i}>
                <Card item={item}/>
              </div>
            ))
          }
        </Slider>
    </div>
  )
}

export default SpecialDishes
