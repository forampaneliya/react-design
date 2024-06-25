import React, { useState } from "react";

function Input() {

    let [input, setinput] = useState("")
    let [email, setemail] = useState("")
    let [pass, setpass] = useState("")


    // console.log(e);

    function Handle(e) {
        setinput(e.target.value);
        // setemail(e.target.value);


    }
    function Handler(e) {
        // setinput(e.target.value);
        setemail(e.target.value);


    }
    function Handlerr(e) {
        setpass(e.target.value)
    }

    function Submit(e) {
        e.preventDefault()
        let data = {
            name: input,
            mail: email,
            password: pass

        };
        console.log(data);

        setinput("")
        setemail("")
        setpass("")
    }
    return <>.
        <input type="text" value={input} onChange={Handle} /><br></br>
        <input type="email" value={email} onChange={Handler} /><br></br>
        <input type="password" value={pass} onChange={Handlerr} /><br></br>
        <button onClick={Submit}>submit</button>
    </>
}

export default Input
