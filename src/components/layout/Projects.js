import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import NavbarCss from './NavbarCss.css'
import ProjectIndex from './ProjectIndex'
import axios from 'axios'
import Jumbotron from './Jumbotron'


    class Projects extends Component{
        constructor(props){
          super(props)
    //       if (this.props.currentUser == null){
    //         this.state = {
    //           page:"login"
    //         }
    //     }else{
    //         this.state = {
    //           page: "delete"
    //         }
    //       }
    //       this.changePage = this.changePage.bind(this);
    //     }
    //     changePage(newPage) {
    //       this.setState({
    //         page: newPage
    //     })

     }
      


    render(){
        // switch(this.state.page) {
        //     case "signup":
        //       return <Signup changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
        //     case "login":
        //       return <Login changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
        //     case "delete":
        //       return <Logout changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
            
      
        return(
            <div>
                <Jumbotron />

                <button>
                    <Link to='/projects'> See All Projects</Link>
                </button>
            </div>
        )
    }
    
}
export default Projects