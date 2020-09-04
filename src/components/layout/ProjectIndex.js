import React,{Component} from 'react'
// import Navbarcss from './Navbarcss'
// import {Link} from 'react-router-dom';
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'
import ProjectItems from './ProjectItems'

class ProjectIndex extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const projects= this.props.project_modules.map((data) =>{
      return <ProjectItems key={data.id} title={data.title} body={data.body} user_id={data.user_id}/>

    })
    return(
          <div>
            {projects}
          </div>
      )
    }
  }

export default ProjectIndex