import React from "react";

const Testimonials = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] from-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4">
            <p className="subtitle">Testimonials</p>
          <h2 className="title">
            What Our Customers Say About Us
          </h2>
          <p className="text-xl text-[#4A4A4A]">
          “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full ">
            Order Now
          </button>
        </div>

        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
