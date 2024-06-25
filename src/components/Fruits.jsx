import React from "react";
import { Button } from "./Atoms/Atomic";

function Fruits()
{
    return(
        <>
         <section>
      <div className="container-fluid py">
        <div className="container">
          <div className="prod-wrap">
            <div className="row">
              <div className="col-4 start-text">
                <h1 className='heading-start'>Our Organic Products</h1>

              </div>
              <div className="col-8 text-end">
                <ul className='nav-btn'>
                  <li className='nav-iteam-card'>
                    <a href="" className='menu-card'><span className='wrap-ca' style={{ backgroundColor: "#ffb524", color: "white" }}>All Products</span></a>
                  </li>
                  <li className='nav-iteam-card'>
                    <a href="" className='menu-card'><span className='wrap-ca'>Vegetables</span></a>

                  </li>
                  <li className='nav-iteam-card'>
                    <a href="" className='menu-card'><span className='wrap-ca' style={{ padding: "10px 32px" }}>Fruits</span></a>

                  </li>
                  <li className='nav-iteam-card'>
                    <a href="" className='menu-card'><span className='wrap-ca' style={{ padding: "10px 32px" }}>Bread</span></a>

                  </li>
                  <li className='nav-iteam-card'>
                    <a href="" className='menu-card'><span className='wrap-ca' style={{ padding: "10px 32px" }}>Meat</span></a>

                  </li>
                </ul>

              </div>
            </div>

            <div className="card-content-main">
              <div className="row">
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/4.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Grapes</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
                        {/* <a href="" style={{ textDecoration: "none" }} className='main-add'>
                          <div className="card-addcart">
                            <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                            Add to cart
                          </div>
                        </a> */}

                        <Button cls='main-add ' cls2='card-addcart' cls3='fa fa-shopping-bag' content='Add to cart'/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/5.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Raspberries</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
                        {/* <a href="" style={{ textDecoration: "none" }} className='main-add'>
                          <div className="card-addcart">
                            <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                            Add to cart
                          </div>
                        </a> */}
                              <Button cls='main-add ' cls2='card-addcart' cls3='fa fa-shopping-bag' content='Add to cart'/>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/6.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Apricots</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/7.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Orange</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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

              <div className="row">
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/8.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Banana</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/5.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Raspberries</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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
                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/6.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Apricots</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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



                <div className="col-3 single-card">
                  <div className="btn-main-card">
                    <div className="fruit-img">
                      <img src="/img/7.jpg" alt="" />
                    </div>
                    <div className='btn-card-inner'>Fruits</div>
                    <div className='card-inner-con'>
                      <h4 className='head-ca'>Orange</h4>
                      <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="card-addcart-wrap">
                        <div className="card-price">
                          $4.99 / kg
                        </div>
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
        </div>
      </div>


    </section>
        
        </>
    )
}

export default Fruits