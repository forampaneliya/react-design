import React from 'react';

function Service() {
  let arr = [
    {
      heading: "freeshiping",
      para: "Free on order over $300"

    },
    {
      heading: "Security Payment",
      para: "100% security payment"
    },
    {

      heading: "30 Day Return",
      para: "30 day money guarantee"


    },
    {
      heading: "24/7 Support",
      para: "Support every time fast"

    }

  ]

  return (
    <>
      {/* <section> */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
          {arr.map((val) => {
            return <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fas fa-car-side fa-3x' style={{ color: "white" }}></i>
                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>{val.heading}</h5>
                    <p className='card-para'>{val.para}</p>
                  </div>
                </div>
              </div>
            </div>
          })};
          {/* <div className="row"> */}



          {/* <div className="col-3">
              <div className="card">
                <div className="card-main">
                  <div className="card-pic">
                    <i className='fas fa-user-shield fa-3x' style={{ color: "white" }}></i>

                  </div>
                  <div className="card-content">
                    <h5 className='card-heading'>{heading}</h5>
                    <p className='card-para'>{para}</p>

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
                    <h5 className='card-heading'>{heading}</h5>
                    <p className='card-para'>{para}</p>

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
                    <h5 className='card-heading'>{heading}</h5>
                    <p className='card-para'>{para}</p>

                  </div>

                </div>
              </div>
            </div>  */}


        </div>
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}

    </>
  )
}

export default Service;