import React from 'react';
import axios from 'axios'
export default class EditProject extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { post: [] };

    this.state = {
      title: '',
      des: '',
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log({id})
    fetch(`/api/v1/projects/${id}`).
      then((response) => response.json()).
      then((post) => this.setState({ ...post }));
  }

  // change(){
  //   const { match: { params: { id } } } = this.props;
  //   console.log({id})
  //   fetch(`http://localhost:3000/api/v1/projects/${id}`).
  //     then((response) => response.json()).
  //     then((post) => this.setState({ ...post }));
  
  // }
  
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = (event) => {
    const { match: { params: {id} } } = this.props;
    console.log({id})
    console.log(this.state)
    axios.put(`/api/v1/projects/${id}`, {
      method: 'put',
      title: (this.state.title),
      body: (this.state.des),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      alert('Project updated successfully');
      window.location.href = '/projects';
    });
  }

  render() {
    const {title, des} = this.state;
    return (


          <div className="container">
          <form className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
             </div>
  
          <div className="input-field">
              <label >Desciprtion</label>
              <input
              type='text'
              name='des'
              value={des}
              onChange={this.handleInputChange}
            />          
            </div>

          <div className="input-field">
                 <button onClick={this.updatePostRequest} >Update</button>

          </div>
      </form>
  </div>


    //   <div>
    //      {/* {this.change} */}

    //     <h4>Update Post</h4>
    //     <div>
    //       <label>Title: </label>
    //       <input
    //         type='text'
    //         name='title'
    //         value={title}
    //         onChange={this.handleInputChange}
    //         />
    //     </div>
    //     <div>
    //       <label>Description: </label>
    //       <input
    //         type='text'
    //         name='des'
    //         value={des}
    //         onChange={this.handleInputChange}
    //         />
    //     </div>

    //     <button onClick={this.updatePostRequest}>Update</button>
    //   </div>
     );
  }
}