import React from 'react';
import '../style.css';
function Heading(props){
    return <div className="heading-div">
        <h1>{props.heading}</h1>
        
    </div>
}

export default Heading;