import React from "react";

function Vegetables()
{
    return(
        <>
        <section>
      <div className="container-fluid">
        <div className="container py">
          <div className="veg-wrap">
            <h1 className='organic-head'>Fresh Organic Vegetables</h1>
            <div className="arrow-wrap-card">
              <a href=""><div className="arow-wrap pre-aro"><i className="fa-solid fa-arrow-left"></i></div></a>
              <a href=""><div className="arow-wrap next-aro"><i className="fa-solid fa-arrow-right"></i></div></a>
            </div>
          </div>
          <div className="row">
            <div className="col-3 single-card" style={{ border: "1px solid #81c408", borderRight: "4px solid #81c408" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/13.jpg" alt="" />
                </div>
                <div className='btn-card-inner' style={{ backgroundColor: "#81c408" }}>Vegetable</div>
                <div className='card-inner-con'>
                  <h4 className='head-ca'>Tomato</h4>
                  <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="card-addcart-wrap">
                    <div className="card-price">
                      $7.99 / kg                        </div>
                    <a href="" style={{ textDecoration: "none" }} className='main-add'>
                      <div className="card-addcart">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 single-card" style={{ border: "1px solid #81c408", borderRight: "4px solid #81c408" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/15.jpg" alt="" />
                </div>
                <div className='btn-card-inner' style={{ backgroundColor: "#81c408" }}>Vegetable</div>
                <div className='card-inner-con'>
                  <h4 className='head-ca'>Potato</h4>
                  <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="card-addcart-wrap">
                    <div className="card-price">
                      $7.99 / kg                        </div>
                    <a href="" style={{ textDecoration: "none" }} className='main-add'>
                      <div className="card-addcart">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 single-card" style={{ border: "1px solid #81c408", borderRight: "4px solid #81c408" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/16.jpg" alt="" />
                </div>
                <div className='btn-card-inner' style={{ backgroundColor: "#81c408" }}>Vegetable</div>
                <div className='card-inner-con'>
                  <h4 className='head-ca'>Parsely</h4>
                  <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="card-addcart-wrap">
                    <div className="card-price">
                      $7.99 / kg                        </div>
                    <a href="" style={{ textDecoration: "none" }} className='main-add'>
                      <div className="card-addcart">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 single-card" style={{ border: "1px solid #81c408", borderRight: "4px solid #81c408" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/14.jpg" alt="" />
                </div>
                <div className='btn-card-inner' style={{ backgroundColor: "#81c408" }}>Vegetable</div>
                <div className='card-inner-con'>
                  <h4 className='head-ca'>Bell Papper</h4>
                  <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <div className="card-addcart-wrap">
                    <div className="card-price">
                      $7.99 / kg                        </div>
                    <a href="" style={{ textDecoration: "none" }} className='main-add'>
                      <div className="card-addcart">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}
export default Vegetables