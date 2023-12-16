import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // loading data
    useEffect(()=>{
        // fetch data from backend
        const fetchData = async () => {
            try{
                const response = await fetch("/menu.json")
                const data = await response.json()
                setMenu(data);
                setFilteredItems(data);
            }catch(error){
                console.log("fetch data error", error);
            }
        };
        
        fetchData();
    }, [])

    // filtering data by category
    const filterItems = (category) => {
        const filterd = category === "all" ? menu : menu.filter((item)=> item.category === category)
        setFilteredItems(filterd)
        setSelectedCategory(category)
    }

    // show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all")
    }

    // sorting A-Z, Z-A, l-to-h, h-to-l
    const handleSortChange = (option) =>{
        setSortOption(option)
        let sortedItems = [...filteredItems]
    }



  return (
    <div>
        {/* menu banner */}
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] from-100%'>
      <div className="py-32 flex flex-col items-center">
        {/* text */}
        <div className="space-y-7 px-4 text-center">
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious<span className='text-green'>Food</span> </h2>
            <p className='text-xl text-[#4A4A4A]'>Come with Family & feel the joy Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full '>Order Now</button>
        </div>


        
      </div>
        </div>

        {/* menu shop section */}
        <div className="section-container">

        </div>
    </div>
  )
}

export default Menu
