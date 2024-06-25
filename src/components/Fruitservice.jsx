import React from "react";

function Fruitservice()
{
    return (
        <>
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
        </>
    )
}

export default Fruitservice