import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';

const SignedInLinks =()=>{

    return(
        <ul className="right">
            <li>
                <NavLink to='/projects/new'>New Project</NavLink>
            </li>
            <li>
                <NavLink to='/'>LogOut</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>MA</NavLink>
            </li>
        </ul>
    )
}
export default SignedInLinks