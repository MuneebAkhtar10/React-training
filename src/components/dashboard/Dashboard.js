import React from 'react';
import {compose} from 'redux'
import axios from 'axios'
import {Link} from 'react-router-dom';
import DashboardCss from './DashboardCss.css'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPostsList();
  }

  fetchPostsList = () => {
    axios.get('http://localhost:3000/api/v1/projects.json')
           .then(data => {
             let res=[]
             console.log(data)
             data.data.data.map((data) =>{
      
               res.push({id: data.id , title: data.title, body: data.body, user_id: data.user_id})
               this.setState({posts: res})
      
             })
           })
           .catch(data => {
              debugger
          })
    }

  handleDelete = (postId) => {
    console.log(postId)
    axios.delete(`/api/v1/projects/${postId}`).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchPostsList();
      })
  }
  // componentDidMount() {
  //   axios.get('http://localhost:3000/api/v1/projects.json')
  //        .then(data => {
  //          let res=[]
  //          console.log(res)
  //          data.data.data.map((data) =>{
    
  //            res.push({id: data.id , title: data.title, body: data.body, user_id: data.user_id})
  //            this.setState({posts: res})
    
  //          })
  //        })
  //        .catch(data => {
  //           debugger
  //       })
  // }


    // fetch(`localhost:3000/api/v1/projects/${postId}`, { method: 'delete' }).
    //   then((response) => {
    //     alert('Post deleted successfully')
    //     this.fetchPostsList();
    //   });
  

  render() {
    const { posts } = this.state;
    console.log({posts})
    return (
      <section>
        <h4>All Projects</h4>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          </table>
        </div>
          {
            posts.map((post) => {
              return (
              <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>
                        <Link to={`/project/${post.id}`}>
                        {post.title}
                        </Link>
                        </td>
                        <td>{post.body}</td>
                        <td>
                            <button className="btnn2"><Link to={`/project/${post.id}`} >
                              Show
                            </Link>             
                            </button>
                            <button ><Link to={`/projects/${post.id}/edit`} >
                              Edit
                            </Link>             
                            </button>
                            <button onClick={() => this.handleDelete(post.id) } className="btn">
                            Delete
                            </button>
                        </td>
                    </tr> 
                </tbody>
              </table>
            </div>
         )
        })
      }
      </section>
    );
  }
}



















// // import React ,{Component} from 'react'
// import Notifications from './Notifications'
// import ProjectList from '../projects/ProjectList'
// import ProjectIndex from '../layout/ProjectIndex'
// import {connect} from 'react-redux'
// //for data ldisplay from db
// import {firestoreConnect} from 'react-redux-firebase'
// import {compose} from 'redux'
// import axios from 'axios'
// // import Project from './Project'

// import React,{Component,useState,useEffect} from 'react'


// // const Dashboard = () =>{

// //     // const app = express();
// //     // app.use(function(req, res, next) {
// //     //     res.header("Access-Control-Allow-Origin", "*");
// //     //     res.header(
// //     //       "Access-Control-Allow-Headers",
// //     //       "Origin, X-Requested-With, Content-Type, Accept"
// //     //     );
// //     //     next();
// //     //   });


// //     const [projects, setProjects]=useState([])
// //     useEffect(() =>{
        
// //         axios.get('http://localhost:3000/api/v1/projects.json')
// //         .then( resp => setProjects(resp.data.data.airlines))
        
// //         .catch(resp =>console.log("resp"))

// //     }, [projects.lenth])


// class Dashboard extends Component{
//     //getting projects from store and passing as prop in PROJECTLIST
//     constructor(props){
//         super(props)

//         this.state={

//         project_modules:[
//         ]
//         }
//     }
//     componentDidMount(){
//      axios.get('http://localhost:3000/api/v1/projects.json')
//      .then(data => {
//         debugger
//        let res=[]
//        data.data.data.map((data) =>{

//          res.push({id: data.id , title: data.title, body: data.body, user_id: data.user_id})
//          this.setState({project_modules: res})

//        })
//      })
//      .catch(data => {
//         debugger
//     })
// }



//         // const {projects} = this.props;
//         // render(){
//    render(){
//     return(
//         <div className="dashboard container">
//             <div className="row">
//                 <div className="col s12 m6">
//                     <h5>All Projects</h5>
//                 <ProjectIndex project_modules={this.state.project_modules}/> 
//                     {/* <ProjectList projects={projects}/> */}
//                 </div>
//                 <div className="col s12 m5 offset-m1">
//                     {/* <Notifications /> */}
//                 </div>
//             </div>
//         </div>
//     )
//    }
    
// }

// // const mapStateToProps = (state)=>{
// //     console.log(state);
// //     return{
// //         // This is the dummy data fetcher line.project is from rootReducer and projects from projectReducer
// //         // projects: state.project.projects
// //         projects: state.firestore.ordered.projects
// //     }
// // }
// // //passing function in connect and firestoreConnect will fetch data from db
// // export default compose(
// //     connect(mapStateToProps),
// //     firestoreConnect([
// //         {collection: 'projects'}
// //     ])
// // )(Dashboard)
// export default Dashboard