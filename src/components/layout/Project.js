import React,{Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

export default class Project extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { posts: []
        };

      }
    
  //   componentDidMount() {
  //       const { match: { params: {id} } } = this.props;
  //       console.log({id});

  //       fetch(`http://localhost:3000/api/v1/projects/${id}`).
        
  //       then((response) => response.json())
  //       .then((response) => this.setState({ posts : response}))
  // }

  componentDidMount(){

    this.fetchResult();
  }


  fetchResult = () => {
    const { match: { params: {id} } } = this.props;
    console.log({id});

    axios.get(`http://localhost:3000/api/v1/projects/${id}`)
            .then(data => {
              let res=[]
              console.log(data)
              // this.setState(data.data.data.title,data.data.data.body)
              // data.data.body = this.state
              // data.data.data.map((data) =>{
                res.push({id: data.data.data.id , title: data.data.data.title, body: data.data.data.body, user_id: data.data.data.user_id})
                this.setState({posts: res})
                
                console.log("RES",{res})
              })
            // })
            
            .catch(data => {
              // debugger
          })
    }
    handleDelete = (postId) => {
      console.log(postId)
      axios.delete(`http://localhost:3000/api/v1/projects/${postId}`).
        then((response) => {
          alert('Post deleted successfully')
          window.location.href = '/projects';
          this.fetchResult();
        })
    }

  render() {
    const {posts} = this.state;
    console.log({posts})
    return (
      <section>
      <h4> Projects</h4>
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
          posts.map((posts) => {
            
            return (
  
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr key={posts.id}>
                      <td>{posts.id}</td>
                      <td>
                      <Link to={`/project/${posts.id}`}>
                      {posts.title}
                      </Link>
                      </td>
                      <td>{posts.body}</td>
                      <td>
                          <button class="btn-gradient black small"><Link to={`/projects/${posts.id}/edit`} >
                            edit
                          </Link>             
                          </button>
                          <button onClick={() => this.handleDelete(posts.id) } class="btn-gradient red small">
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
