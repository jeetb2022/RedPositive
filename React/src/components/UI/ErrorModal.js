import React from "react";
import Card from "./Card";
import './ErrorModal.css'

const ErrorModal = (props)=>{
const clickHandler = ()=>{
    props.onCancel();
}

return (
    <div>
        <div className="backdrop" onClick={clickHandler}>

        </div>
        <Card className="errorMessage">

        <header>
            <h2>ERRRRRRRoooorr</h2>
        </header>
        <div>
        pls Addd Alll the items 
        </div>
        <footer>
            <button onClick={clickHandler}> Cancel</button>
        </footer>
        </Card>
    </div>
);
};

export default ErrorModal;