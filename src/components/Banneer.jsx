import React from "react";


function Banner()
{
    return (
        <>
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
        
        
        </>
    )
}

export default Banner
