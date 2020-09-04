import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import NavbarCss from './NavbarCss.css'
import ProjectIndex from './ProjectIndex'
import axios from 'axios'
import Signup from '../auth/Signup'
import Login from '../auth/Login'
import Logout from '../auth/Logout'

    class Navbar extends Component{
        constructor(props){
          super(props)
      
    }
      
    render(){

            return(
            <div>
                
            <nav className="nav-wrapper grey darken-2">
                <div className= "container">
                    <Link to='/' className="brand-logo">Bugzilla</Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </nav>
            {/* <ProjectIndex project_modules={this.state.project_modules}/> */}

            </div>
        )
        
    }
}
export default Navbar