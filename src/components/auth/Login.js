import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery';


// function Login(){
    
//     handleLogin(e) {
//      e.preventDefault()
//      var that = this
//      var userInfo = {
//       user: {
//        email: document.getElementById('email').value,
//        password: document.getElementById('password').value
//       }
//      }
//      $.ajax({
//       type: "POST",
//       url: "http://localhost:3000/users/sign_in",
//       dataType: 'json',
//       data: userInfo,
//       error: function (error) {
//        console.log(error)
//       },
//       success: function (res) {
//        that.props.changePage("edit")
//        that.props.updateCurrentUser(res.email)
//       },
//      })
//     },
//    render: function() {
//      return (
//       <div>
//        <h2>Login</h2>
//        <form>
//         <input id="email" placeholder="email"/>
//         <input id="password" placeholder="password"/>
//         <button onClick={this.handleLogin}>Submit</button>
//        </form>
//        <button onClick={()=>this.props.changePage("signup")}>Sign Up!</button>
//       </div>              
//      )
//     }
//    });
// }
// export default Login











class Login extends Component {
state={
    email:"",
    password:""
}

// this will set the state on change in input fields
handleChange = (e)=>{
    this.setState({
        [e.target.id]: e.target.value
    })
}
// handleSubmit =(e) =>{
//     console.log(this.state)
// }


handleSubmit =(e)=> {
    e.preventDefault();
    console.log(this.state)
    // axios.post('http://localhost:3000//users/sign_in',{method: 'post',
    // body: JSON.stringify(this.state),
    // headers: { 
    //     'Content-Type': 'application/json' 

    // },
    // }).then((response) => {
    //     console.log(this.state)

    //     alert('User Logged In successfully');
    //     window.location.href = '/projects';
    //     })
    //     .catch(data => {
    //         debugger
    //     })
  }




render(){

    return(

        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
        
                <div className="input-field">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
        )
    }
}
export default Login