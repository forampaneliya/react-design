import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './all.min.css';
// import './img'
// import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* navbar ===========================================*/}

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


    {/* ===================================================== */}
    {/* =========================section-1 */}


    <section>
      <div className="container-fluid hero-head">
        <div className="container py">
          <div className="row align">
            <div className="col-6">
              <div className="text-wrap">
                <h4 className='heading'>100% Organic Foods</h4>
                <h1 className='content'>Organic Veggies & <br></br>Fruits Foods</h1>
                <div className="form">
                  <input type="text" className='form-control' placeholder='Search' />
                  <button type='submit' className='btn'>submit Now</button>

                </div>
              </div>

            </div>
            <div className="col-6 wrap">
              <a href=""><div className="arrow pre"> <i className='fa-solid fa-arrow-left'></i></div></a>
              <img src="/img/3.jpg" alt="" className='img' />
              <a href=""> <div className="arrow next"><i className='fa-solid fa-arrow-right'></i> </div></a>


            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================================== */}
    {/* =====================section-2 */}

    <section>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fas fa-car-side fa-3x' style={{ color: "white" }}></i>

                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>Free Shipping</h5>
                    <p className='card-para'>Free on order over $300</p>

                  </div>

                </div>
              </div>
            </div>


            <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fas fa-user-shield fa-3x' style={{ color: "white" }}></i>

                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>Security Payment</h5>
                    <p className='card-para'>100% security payment</p>

                  </div>

                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fas fa-exchange-alt fa-3x ' style={{ color: "white" }}></i>

                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>30 Day Return</h5>
                    <p className='card-para'>30 day money guarantee</p>

                  </div>

                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fa fa-phone fa-3x' style={{ color: "white" }}></i>

                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>24/7 Support</h5>
                    <p className='card-para'>Support every time fast</p>

                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
    {/* =========================== */}

    {/* section-3================================== */}
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


    {/*section-4 ============================================== */}

    <section>
      <div className="container-fluid">
        <div className="container py">
          <div className="row">
            <div className="col-4 card-single-wrap" >
              <div className="img-card-wrap">
                <img src="/img/10.jpg" alt="" />
              </div>
              <div className="bottom-card">
                <div className="service-card">
                  <h5 className='ser-head'>Fresh Apples</h5>
                  <h3 className='ser-con'>20% OFF</h3>
                </div>

              </div>

            </div>
            <div className="col-4 card-single-wrap" style={{ border: "1px solid #45595b" }}>
              <div className="img-card-wrap">
                <img src="/img/11.jpg" alt="" />
              </div>
              <div className="bottom-card" style={{ backgroundColor: "#45595b" }}>
                <div className="service-card">
                  <h5 className='ser-head'>Tasty Fruits</h5>
                  <h3 className='ser-con'>Free delivery</h3>
                </div>

              </div>

            </div>
            <div className="col-4 card-single-wrap" style={{ border: "1px solid #81c408" }}>
              <div className="img-card-wrap">
                <img src="/img/12.jpg" alt="" />
              </div>
              <div className="bottom-card" style={{ backgroundColor: "#81c408" }}>
                <div className="service-card">
                  <h5 className='ser-head'>Exotic Vegitable</h5>
                  <h3 className='ser-con'>Discount 30$s</h3>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
    {/* =============================================== */}
    {/* =====================section-5 */}
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

            {/* 2 */}
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
            {/* 3 */}
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
            {/* 4 */}
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

    {/* section-6=========================================== */}
    <section className='our-store'>
      <div className="container-fluid">
        <div className="container py">
          <div className="row">
            <div className="col-6 our-store-ped ">
              <h1 className='our-store-head'>Fresh Exotic Fruits</h1>
              <p className='our-store-para'>in Our Store</p>
              <p className='our-store-p'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
              <a href="" className='our-btn'>BUY</a>
            </div>
            <div className="col-6">
              <div className="img-wrap">
                <img src="/img/21.png" alt="" sizes="" srcset="" />
                <div className='img-note'>
                  <h1 className='img-not-one'>1</h1>
                  <p className='our-weight'> kg</p>

                  <span className='our-price'> 50$</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* ======================================== */}

    {/* section-7================================= */}
    <div className="ontainer-fluid">
      <div className="container py">
        <div className="heading-products">
          <h1 className='pro-head'>Bestseller Products</h1>
          <p className='pro-para'>Latin words, combined with a handful of model sentence structures, to generate Lorem <br></br>Ipsum which looks reasonable.</p>
          <div className="row pro-align">
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/17.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'>Organic Orange</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* 2 */}
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/18.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'> Raspberries</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
            {/* 3 */}
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/19.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'>Organic Banana</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
          {/* ------------------------------------------ */}
          <div className="row pro-align">
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/20.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'>Organic Apricots</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* 2 */}
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/21.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'> Organic Grapes</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
                        <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                        Add to cart
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
            {/* 3 */}
            <div className="col-4 pro-single-card">
              <div className="single-wrap-pro">
                <div className="row">
                  <div className="col-6">
                    <div className="card-pro-img">
                      <img src="/img/22.jpg" alt="" />
                    </div>

                  </div>
                  <div className="col-6">
                    <a href="" className='pro-card-head'>Organic Apple</a>
                    <div className="star">
                      <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star'></i>
                      <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                    </div>
                    <h4 className='Price-produ'>3.12 $</h4>
                    <a href="">
                      <div className="card-addcart add-cart-pro">
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
            {/* 1 */}
            <div className="col-3 single-card" style={{ border: "none" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/4.jpg" alt="" />
                </div>
                <a href="" className='pro-card-head'>Organic Grapes</a>
                <div className="star" style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>
                  <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                </div>
                <h4 className='Price-produ' style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>3.12 $</h4>
                <a href="">
                  <div className="card-addcart add-cart-pro" style={{ width: "150px", marginLeft: "70px" }}>
                    <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                    Add to cart
                  </div>
                </a>
              </div>
            </div>
            {/* 2 */}
            <div className="col-3 single-card" style={{ border: "none" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/5.jpg" alt="" />
                </div>
                <a href="" className='pro-card-head'>Organic  Raspberries</a>
                <div className="star" style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>
                  <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                </div>
                <h4 className='Price-produ' style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>3.12 $</h4>
                <a href="">
                  <div className="card-addcart add-cart-pro" style={{ width: "150px", marginLeft: "70px" }}>
                    <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                    Add to cart
                  </div>
                </a>
              </div>
            </div>
            {/* 3 */}
            <div className="col-3 single-card" style={{ border: "none" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/6.jpg" alt="" />
                </div>
                <a href="" className='pro-card-head'>Organic Apricots</a>
                <div className="star" style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>
                  <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                </div>
                <h4 className='Price-produ' style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>3.12 $</h4>
                <a href="">
                  <div className="card-addcart add-cart-pro" style={{ width: "150px", marginLeft: "70px" }}>
                    <i className='fa fa-shopping-bag' style={{ marginRight: "5px", color: "#81c408" }}></i>
                    Add to cart
                  </div>
                </a>
              </div>
            </div>
            {/* 4 */}
            <div className="col-3 single-card" style={{ border: "none" }}>
              <div className="btn-main-card">
                <div className="fruit-img">
                  <img src="/img/7.jpg" alt="" />
                </div>
                <a href="" className='pro-card-head'>Organic Orange</a>
                <div className="star" style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>
                  <i className='fas fa-star text-primary marg-star' style={{ marginLeft: "14px" }}></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star'></i>
                  <i className='fas fa-star text-primary marg-star' style={{ color: "#747d88" }}></i>


                </div>
                <h4 className='Price-produ' style={{ display: "flex", justifyContent: "center", marginLeft: "0px" }}>3.12 $</h4>
                <a href="">
                  <div className="card-addcart add-cart-pro" style={{ width: "150px", marginLeft: "70px" }}>
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


    {/* ===================================== */}


    {/*section-8 ======================================= */}

    <div className="container-fluid py">
      <div className="container ">
        <div className="qulity-back">
          <div className="row">
            <div className="col-3 single-qulity">
              <div className="content-wrap">
                <i className="fa fa-users text-secondary qulity" style={{ color: "#ffb524", fontSize: "55px", marginBottom: "25px" }}></i>
                <h4 className='qulity-head'>satisfied customers</h4>
                <h1 className='qulity-cer'>1963</h1>

              </div>


            </div>

            {/* 2 */}
            <div className="col-3 single-qulity">
              <div className="content-wrap">
                <i className="fa fa-users text-secondary qulity" style={{ color: "#ffb524", fontSize: "55px", marginBottom: "25px" }}></i>
                <h4 className='qulity-head'>quality of service</h4>
                <h1 className='qulity-cer'>33</h1>

              </div>


            </div>
            {/* 3 */}
            <div className="col-3 single-qulity">
              <div className="content-wrap">
                <i className="fa fa-users text-secondary qulity" style={{ color: "#ffb524", fontSize: "55px", marginBottom: "25px" }}></i>
                <h4 className='qulity-head'>Available Products</h4>
                <h1 className='qulity-cer'>789</h1>

              </div>


            </div>
            {/* 4 */}
            <div className="col-3 single-qulity">
              <div className="content-wrap">
                <i className="fa fa-users text-secondary qulity" style={{ color: "#ffb524", fontSize: "55px", marginBottom: "25px" }}></i>
                <h4 className='qulity-head'>satisfied customers</h4>
                <h1 className='qulity-cer'>1963</h1>

              </div>


            </div>
          </div>

        </div>

      </div>
    </div>


    {/* =========================================== */}

    {/* =========================================== */}
    {/* <div className="container-fluid ">
      <div className="container py">
        <div className="test-head-wrap">
          <h4 className='test-head'>Our Testimonial</h4>
    <h1 className='test-head-bottom'>Our Client Saying!</h1>
        </div>
      </div>
    </div> */}


    {/* ========================================= */}


    {/* ==================footer================= */}
    <footer>
      <div className="container-fluid">
        <div className="container py">
          <div className="footer-head-wrap">
            <div className="row">

              <div className="col-3">
                <div>
                  <a href="" className='logo-footer-wrap'>
                    <h1 className='logo-footer'>Fruitables</h1>
                    <p className='para-footer'>Fresh products</p>
                  </a>
                </div>

              </div>
              <div className="col-6">
                <div className="form footer-form">
                  <input type="email" className='form-control footer-f' placeholder='Enter Email' />
                  <button type='submit' className='btn btn-footer'>submit Now</button>

                </div>

              </div>
              <div className="col-3">
                <div className="social-wrap">
                  <a href="" className='social-menu'><i className="fab fa-twitter"></i></a>
                  <a href="" className='social-menu'><i className="fab fa-facebook-f"></i></a>
                  <a href="" className='social-menu'><i className="fab fa-youtube"></i></a>
                  <a href="" className='social-menu'><i className="fab fa-linkedin-in"></i></a>


                </div>

              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-3 footer-main">
              <div className="footer-item">
                <h4 className='footer-heading'>Why People Like us!</h4>
                <p className='footer-para'>typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                <a href="" className='footer-bt'>Read More</a>
              </div>

            </div>
            <div className="col-3 footer-main">
              <div className="footer-iteam">
                <h4 className="footer-heading">Shop Info</h4>
                <a href="" className='btn-link'>About Us</a>
                <a href="" className='btn-link'>Contact Us</a>
                <a href="" className='btn-link'>Privacy Policy</a>
                <a href="" className='btn-link'>Terms & Condition</a>
                <a href="" className='btn-link'>Return Policy</a>
                <a href="" className='btn-link'>FAQs & Help</a>



              </div>

            </div>

            {/* 2 */}
            <div className="col-3 footer-main">
              <div className="footer-iteam">
                <h4 className="footer-heading">Account</h4>
                <a href="" className='btn-link'>My Account</a>
                <a href="" className='btn-link'>Shop details</a>
                <a href="" className='btn-link'>Shopping Cart</a>
                <a href="" className='btn-link'>Wishlist</a>
                <a href="" className='btn-link'>Order History</a>
                <a href="" className='btn-link'>International Orders</a>



              </div>

            </div>
            {/* 3 */}
            <div className="col-3 footer-mainn">
              <div className="footer-iteam">
                <h4 className="footer-heading">Contact</h4>
                <p className='footer-con'>Address: 1429 Netus Rd, NY 48247</p>
                <p className='footer-con'>Email: Example@gmail.com</p>
                <p className='footer-con'>Phone: +0123 4567 8910</p>
                <p className='footer-con'>Payment Accepted</p>
                <img src="/img/20.png" alt="" />



              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid">
        <div className="container py">
          <div className="row">
            <div className="col-6">
              <div className="text-light">
                <a href="" className='text-green'>
                  <i className='fas fa-copyright text-light me-2' style={{ marginRight: "5px " }}></i>
                  Your Site Name
                </a>
                , All right reserved.
              </div>

            </div>
            <div className="col-6 text-end">
              <div className="text-light">
                Designed By
                <a href="" className='text-green'>
                  HTML Codex
                </a>
                Distributed By
                <a href="" className='text-green'>ThemeWagon</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>



    {/* =========================================== */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
