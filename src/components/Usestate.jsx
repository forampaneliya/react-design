import React from 'react';

import { useState } from 'react';

function Usestate() {
    let [count, setcount] = useState(0);
    
    let [color, setcolor] = useState("white");

    function change() {
         setcount(count + 1);
        if(count%2==0) 
            {
                setcolor(color = "blue")

            }
            else{
                setcolor(color = "red")

            }
    }



    // let [chang, setchang]=useState("white")
    // let flag=false;
    // function Inc()
    // {

    //     if(flag==true)
    //         {
    //             setchang(chang="pink")

    //         }
    //         else{
    //             setchang(chang="black")
    //             flag=true;

    //         }
    // }
    
    return (
        <>
            <h1>{count}</h1>
            <div className="box" style={{ height: "100px", width: "100px", border: "1px solid black", backgroundColor: color }}></div>
            <button onClick={change}>Click Me</button><br></br>

            {/* <div className="box" style={{ height: "100px", width: "100px", border: "1px solid black", backgroundColor: chang }}></div>
            <button onClick={Inc}>Click Me</button> */}
            {/* <h1>{count}</h1> */}
            {/* <button onClick={change}>Click Me</button> */}



        </>
    );
}



export default Usestate;