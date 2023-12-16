import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-white text-black">
  <nav>
    <img src="/logo.png" alt="" className='mb-5'/> 
    <h5>Savor the artistry where every dish is a culinary masterpiece</h5>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <p>About us</p>
    <p>Contact</p>
    <p>Jobs</p>
    <p>Press kit</p>
  </nav> 
  <nav>
    <header className="footer-title">Main Menu</header> 
    <p>Home</p>
    <p>Offers</p>
    <p>Menus</p>
  </nav>
</footer>
      <footer className="footer footer-center p-4 bg-primaryBG text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
