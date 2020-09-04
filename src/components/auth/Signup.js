import React, {Component}from 'react'
import axios from 'axios'


// class Signup extends React.Component {
//     constructor(props){
//       super(props);
//       this.handleSignup = this.handleSignup.bind(this);
//     }
//   handleSignup(e) {
//       e.preventDefault();
//       let that = this
//       axios.post('http://localhost:3000/users/sign_up', {
//         user: {
//           email: document.getElementById("email").value,
//           password: document.getElementById("password").value,
//           password_confirmation: document.getElementById("password_confirmation").value,
          
//         }
//       })
//       .then(function(response){
//           console.log(that.props)
//         that.props.changePage("delete");
//         // that.props.updateCurrentUser(email);
//       })
//       .catch(function(error){
//         console.log(error)
//       })
//   }
//   render() {
//     return (
//         <div>
//           <h4>Signup</h4>
//           <form>
//             <input id="email" placeholder="email"/>
//             <input id="password" placeholder="password" type="password"/>
//             <input id="password_confirmation" placeholder="retype password"type="password"/>
//             <button onClick={this.handleSignup}>Submit</button>
//           </form>
//           <button onClick={() => this.props.changePage("login")}>Back to Login</button>
//         </div>
//       );
//     };
//   };

// export default Signup





import styled from "styled-components";
// import { DropDownList } from '@progress/kendo-react-dropdowns';


class Signup extends Component {
state={
    email:"",
    password:"",
    name: ""
}

// this will set the state on change in input fields
handleChange = (e)=>{
    this.setState({
        [e.target.id]: e.target.value,})
    console.log(e.target.value)

}
handleSubmit =(e) =>{

    // const { match: { params: {id} } } = this.props;
    // console.log({id})
    console.log(this.state)
    debugger
    axios.post('http://localhost:3000/auth/is_signed_in', {
      method: 'post',
      email: (this.state.email),
      name: (this.state.name),
      password: (this.state.password),

      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      alert('User Signup successfully');
      window.location.href = '/projects';
    });
  }

 
render(){
    const roles=["pm","qa","developer"];

    return(

        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                </div>
                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
        
                <div className="input-field">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                {/* <div>Roles:</div>
                <Dropdown roles={roles} onChange={this._onSelect} value={defaultroles} placeholder="Select an option" />; */}

                <div className="input-field">
                    <button onClick={this.handlesubmit} className="btn pink lighten-1 z-depth-0">SignUp</button>
                </div>

            </form>
        </div>
        )
    }
}
export default Signup