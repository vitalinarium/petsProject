import React from 'react';
import Navbar from '../Navbar';
import Animal from '../Animal';
const layout = (props) => (
    <div>
        
        <Navbar/>
        {props.children}
    </div>
);

export default layout;
