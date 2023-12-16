import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";
import {FaFilter} from "react-icons/fa"

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    // fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("fetch data error", error);
      }
    };

    fetchData();
  }, []);

  // filtering data by category
  const filterItems = (category) => {
    const filterd =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filterd);
    setSelectedCategory(category);
  };

  // show all data
  // const showAll = () => {
  //   setFilteredItems(menu);
  //   setSelectedCategory("all");
  // };

  // sorting A-Z, Z-A, l-to-h, h-to-l
  const handleSortChange = (option) => {
    // setSortOption(option);
    let sortedItems = [...filteredItems];

    // logic sort
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] from-100%">
        <div className="py-32 flex flex-col items-center">
          {/* text */}
          <div className="space-y-7 px-4 text-center">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious<span className="text-green">Food</span>{" "}
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Come with Family & feel the joy Where Each Plate Weaves a Story of
              Culinary Mastery and Passionate Craftsmanship
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full ">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container">
        {/* filter and sort */}
        <div>
            {/* all category btns */}
            <div className=" flex justify-start flex-wrap md:gap-8 gap-4">
                <button onClick={()=>filterItems("all")} className={`${selectedCategory === "all" ? "at-filter" : ""}`}>All</button>
                <button onClick={()=>filterItems("salad")} className={`${selectedCategory === "salad" ? "at-filter" : ""}`}>Salad</button>
                <button onClick={()=>filterItems("pizza")} className={`${selectedCategory === "pizza" ? "at-filter" : ""}`}>Pizza</button>
                <button onClick={()=>filterItems("soup")} className={`${selectedCategory === "soup" ? "at-filter" : ""}`}>Soups</button>
                <button onClick={()=>filterItems("dessert")} className={`${selectedCategory === "dessert" ? "at-filter" : ""}`}>Desserts</button>
                <button onClick={()=>filterItems("drinks")} className={`${selectedCategory === "drinks" ? "at-filter" : ""}`}>Drinks</button>
            </div>
            
            {/* sort */}
            <div className="flex justify-end mb-4 ">
              <div className="bg-black p-2 rounded-l-lg">
                <FaFilter className="text-white"/>
              </div>
              <select name="" id="sort"
              // value={sortOption}
              onChange={(e)=> handleSortChange(e.target.value)}
              className="bg-black text-white px-2 py-1 outline-none hover:outline-none rounded-r-lg"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">low to high</option>
                <option value="high-to-low">high to low</option>
              </select>
            </div>
        </div>

        {/* productcard */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredItems.map((item) => (
            <div key={item._id} className="flex items-center justify-center">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
