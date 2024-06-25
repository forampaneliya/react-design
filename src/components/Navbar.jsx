

import React from 'react';

function Navbar() {


    return(
        <>
        <div className='container-fluid fixed-top'>
      <div className="container top-head">
        <div className="top-main">
          <div className="top-info-l">
            <small className='top-text'>
              <i className='fas fa-map-marker-alt me-2' style={{ color: "#ffb524", marginRight: "5px" }}></i>
              <a href="" className='text'>123 Street, New York</a>
            </small>

            <small className='top-text'>
              <i className='fas fa-envelope me-2' style={{ color: "#ffb524", marginRight: "5px" }} ></i>
              <a href="" className='text'>Email@Example.com</a>
            </small>
          </div>

          <div className="top-info-r top-text ">
            <a href="" className='text'>Privacy Policy /</a>
            <a href="" className='text'>Terms of Use /</a>
            <a href="" className='text'>Sales and Refunds </a>

          </div>

        </div>
      </div>

      <div className="container">
        <nav className='navbar'>
          <a href="" className='brand'>
            <h1>Fruitables</h1>
          </a>

          <div className='menu'>
            <a href="" className='active nav-iteam '>Home</a>
            <a href="" className='nav-iteam no-active'>Shop</a>
            <a href="" className='nav-iteam no-active'>Shop details</a>
            <a href="" className='nav-iteam no-active'>Pages</a>
            <a href="" className='nav-iteam no-active'>Contact</a>
          </div>

          <div>
            <div className="icon-wrap">
              <a href=""> <div className="serch">
                <i className="fas fa-search" style={{ color: "#81c408" }}></i>
              </div></a>
              <a href=""><div className="cart">
                <i className="fa fa-shopping-bag fa-2x" style={{ color: "#81c408" }}></i>
                <div className="notification">3</div>
              </div>
              </a>
              <a href=""><div className="man">
                <i className="fas fa-user fa-2x" style={{ color: "#81c408" }}></i>
              </div></a>
            </div>
          </div>

        </nav>

      </div>
    </div>

        
        
        </>
    )
    
}

export default Navbar