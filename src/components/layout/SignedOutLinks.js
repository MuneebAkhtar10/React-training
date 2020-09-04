import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';
const SignedOutLinks =()=>{

    return(
        <ul className="right">
            <li>
                <NavLink to='/signedup'>Sign Up</NavLink>
            </li>
            <li>
                <NavLink to='/Login'>LogIn</NavLink>
            </li>
           
        </ul>
    )
}
export default SignedOutLinks