import React from "react";

function Footer()
{
    return(
        <>
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
        
        
        </>
    )
}

export default Footer