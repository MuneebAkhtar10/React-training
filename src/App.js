import React, { Component } from 'react';

import index from './index'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import SignedUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'
import Projects from './components/layout/Projects'
import Project from './components/layout/Project'
import EditProject from './components/projects/EditProject';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
  //   this.state = {
  //     currentUser: null
  //   }
  //   this.updateCurrentUser = this.updateCurrentUser.bind(this);
  //  }
  // componentDidMount(){
  //     let that = this
  //     console.log(this.state)
  //     axios.get('http://localhost:3000/api/v1/projects/is_user_signed_in',{
  //     })
  //     .then(function(response){
  //       if(response.data.email){
  //         that.setState({
  //           currentUser: response.data.email
  //         })
  //       } else {
  //         that.setState({
  //           currentUser: null
  //         })
  //       }
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     })
  //   }
  //   updateCurrentUser(email) {
  //       this.setState({
  //         currentUser: email
  //       })
       }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/"  component={Projects}/>
            <Route exact path="/projects/new"  component={CreateProject}/>
            <Route exact path="/project/:id" component={Project}/>

            <Route path="/projects/:id/edit" exact component={EditProject}/>
            <Route path="/projects" component={Dashboard}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={SignedUp}/>
            {/* <Route path="/create" component={CreateProject}/> */}

              {/* <Route exact path="/">
              <Posts />
            </Route>
            <Route
              path="/posts/:id" exact component={PostDetails}
       /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
