/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {Link} from "react-router-dom"
import {FaHeart, FaRegHeart } from "react-icons/fa"
const Card = ({ item }) => {
    const [isHearFillted, setIsHearFillted] = useState(false);
    const handleHeartClick = () => {
        setIsHearFillted(!isHearFillted);
    }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl relative rounded-2xl">
        <div onClick={()=>handleHeartClick()} className="right-0 top-0 absolute bg-green p-4 rounded-bl-3xl rounded-tr-3xl cursor-pointer ">
            {isHearFillted ? <FaHeart className="h-5 w-5 text-white"/> : <FaHeart className="h-5 w-5 text-rose-500"/>}
        </div>
        <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="hover:scale-105 transition-all duration-200"
          />
        </figure>
        </Link>
        <div className="card-body">
            <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
          <p>Description of the item</p>
          <div className="card-actions justify-between items-center">
            <h5 className="font-semibold"><span className="text-sm text-red">$</span>{item.price}</h5>
            <button className="btn bg-green text-white">Add To Card</button>
          </div>
        </div>
    </div>
  );
};

export default Card;
