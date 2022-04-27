import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div style={{ 
            display: 'flex', 
            height: '80px', 
            position: 'fixed', 
            width: '100%', 
            alignItems:' center',
            background: 'white',
            top:'0',
            boxShadow: '0px 1px 49px -32px'
        }}>

            <Link to='/' style={{margin: '0px 20px'}}>Home</Link>
            <Link to='/send'>Send transaction</Link>
        </div>
    )
}

export default Header