
import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import ProjectCss from './ProjectCss.css'
import $ from 'jquery';

export default class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // post: [],
      title: '',
      des: '',
     }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.value])
  }

//   createPostRequest = (event) => {
//     console.log('this.state', this.state);
//     axios.get(`http://localhost:3000/api/v1/projects`,{method: 'post',
//     body: JSON.stringify(this.state),
//     headers: { 'Content-Type': 'application/json' },
//     })
//     .then(data => {

//     let res=[]
//     console.log(res)
//     data.map((data) =>{

//     res.push({id: data.id , title: data.title, body: data.body, user_id: data.user_id})
//     this.setState({post: res})
//     })
//     })
//     .catch(data => {  
//         debugger
//         })
//     }

    // handleClick() {
    //     var title = this.type.title.value;
    //     var body = this.type.body.value;
    //     $.ajax({
    //         url: "http://localhost:3000/api/v1/projects",
    //         type: "POST",
    //         data: { project: { title: title, body: body } },
    //         success: response => {
    //         console.log("it worked!", response);
    //         }
    //     });
    // }


    // componentDidMount() {
    //   axios.post('http://localhost:3000/api/v1/projects',
    //   {  
    //      method: 'post',
    //      body: JSON.stringify(this.state),
    //      headers: { 'Content-Type': 'application/json' 
    //      },
    //      }).then((response) => {
    //      console.log(this.state)
 
    //      alert('Project created successfully');
    //      window.location.href = '/';
    //      }); 
    // }
  


    createPostRequest = (event) => {
      console.log('this.state', this.state);
     axios.post('/api/v1/projects.json',
     {  
        method: 'post',
        title: (this.state.title),
        body: (this.state.des),
        headers: { 'Content-Type': 'application/json' 
        },
        }).then((response) => {
        console.log(this.state.title)
        alert('Project created successfully');
        window.location.href = '/projects';
        }); 
    }  

  render() {
    const {title, des} = this.state;
    return (
  //     <div>
  //     {/* {this.change} */}

  //    <h4>Create Project</h4>
  //    <div>
  //      <label>Title: </label>
  //      <input
  //        type='text'
  //        name='title'
  //        value={title}
  //        onChange={this.handleInputChange}
  //        />
  //    </div>
  //    <div>
  //      <label>Description: </label>
  //      <input
  //        type='text'
  //        name='des'
  //        value={des}
  //        onChange={this.handleInputChange}
  //        />
  //    </div>

  //    <button onClick={this.createPostRequest}>Create</button>
  //  </div>






      <div className="container">
      <form className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
          <label>Title: </label>
          <input
            ref="title"
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
             </div>
          <div className="input-field">
              <label >Desciprtion</label>
              <input
              ref="body"
              type='text'
              name='des'
              value={des}
              onChange={this.handleInputChange}
            />          
            </div>
          <div className="input-field">
              <button onClick={this.createPostRequest} className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
      </form>
  </div>


    //   <div>
    //     <h3>New Project</h3>
    //     <div>
    //       <label>Title: </label>
    //       <input
    //         ref="title"
    //         type='text'
    //         name='title'
    //         value={title}
    //         onChange={this.handleInputChange}
    //         />
    //     </div>
    //     <div>
    //       <label>Description: </label>
    //       <input
    //         ref="body"
    //         type='text'
    //         name='body'
    //         value={body}
    //         onChange={this.handleInputChange}
    //         />
    //     </div>
    //     <button onClick={this.createPostRequest}>Create</button>
    //   </div>
     );
  }
}



























// import React, {Component}from 'react'
// import {Link} from 'react-router-dom'

// import {connect} from 'react-redux'
// //now using store actions 
// import {createProject} from '../../store/actions/projectActions'
// import axios from 'axios'


// class CreateProject extends Component {
// state={
//     title:"",
//     body:""
// }

// // this will set the state on change in input fields
// handleChange = (e)=>{
//     this.setState({
//         [e.target.id]: e.target.value
//     })
//     // setProject(Object.assign({},project,{[e.target.id]:e.target.value}))

// }
// handleSubmit =(e) =>{
//     e.preventDefault();
//     // when we click on submit it will use action
//     //create project 
//     // const project_id= project.data.id;
//     console.log("wfrer")
//     axios.post('http://localhost:3000/api/v1/projects.json',{[e.target.id]: e.target.value})
//     .then(resp =>{
//         console.log("Api Working")
//     })
//     .catch(resp => {})
//         console.log("kakaak")
//     // this.props.createProject(this.state)
// }
// render(){
//     return(

//         <div className="container">
//             <form onSubmit={this.handleSubmit} className="white">
//                 <h5 className="grey-text text-darken-3">Create Project</h5>
//                 <div className="input-field">
//                     <label htmlFor="title">Title</label>
//                     <input type="text" id="title" onChange={this.handleChange}/>
//                 </div>
        
//                 <div className="input-field">
//                     <label htmlFor="body">Project Content</label>
//                     <textarea className="materialize-textarea" id="body" onChange={this.handleChange}/>
//                 </div>

//                 <div className="input-field">
//                     <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
//                 </div>
//             </form>
//         </div>
//         )
//     }
// }
// // //when submit button is clicked it will run on projectActoin
// // const mapDispatchToProps = (dispatch) =>{
// //     return{
// //         createProject: (project) => dispatch(createProject(project))
// //     }
// // }

// // export default connect(null,mapDispatchToProps)(CreateProject)
// export default CreateProject