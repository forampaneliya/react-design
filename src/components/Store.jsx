import React from "react";

function Store()
{
    return(
        <>
        
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
        </>
    )
}
export default Store