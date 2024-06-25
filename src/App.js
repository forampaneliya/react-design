// import React from 'react';
// import './index.css'
import Navbar from './components/Navbar';
import Service from "./components/Services";
import Banner from './components/Banneer';
import Fruits from './components/Fruits';
import Fruitservice from './components/Fruitservice';
import Vegetables from './components/Vegitable';
import Store from './components/Store';
import Seller from './components/Seller';
import Qulity from './components/Qulity';
import Footer from './components/Footer';
import Usestate from './components/Usestate';
// import Input from './components/input';
// import Input from './components/Input';

// import Usestate from './components/Usestate';



function App() {
    // let arr = [
    //     {
    //         heading: "freeshiping",
    //         para: "Free on order over $300"

    //     },
    //     {
    //         heading: "Security Payment",
    //         para: "100% security payment"
    //     },
    //     {

    //         heading: "30 Day Return",
    //         para: "30 day money guarantee"


    //     },
    //     {
    //         heading: "24/7 Support",
    //         para: "Support every time fast"

    //     }

    // ]
    return (

        <>
            {/* <Usestate /> */}
            {/* <Input/> */}
            <Navbar/>
            <Banner/>
            {/* <section> */}
            {/* <Services/> */}
            {/* <div className="row"> */}
                {/* <div className="col-3"> */}
                     {/* {arr.map((val) => {
                        return <Service heading={val.heading} para={val.para} />
                     })}; */}
                {/* </div> */}
            {/* </div> */}
            {/* </section> */}
            <Service/>
            <Fruits/>
            {/* <Usestate></Usestate> */}

            <Fruitservice/>
            <Vegetables/>
            <Store/>
            <Seller/>
            <Qulity/>
            <Footer/>
            {/* <Service/> */}
        </>
    )
}

export default App;


