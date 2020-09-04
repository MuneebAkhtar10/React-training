import React,{component} from 'react'
import NavbarCss from './NavbarCss.css'
import {Link} from 'react-router-dom';

const ProjectItems = (props)=>{
    const user_id = props.user_id;
    const {projects}= {props}
    console.log({props})
    if(user_id)
        return(

            <div className="project-list section">
                <div className="card z-depth=0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <p> Title:{props.title}</p>
                    <p> Body: {props.body} </p>
                    <p> User_id: {props.user_id}</p>
                    <button><Link to='/project/${props.id} '>Show </Link> </button>

                    {/* <button><p>show</p></button> */}
                    <button><p>Edit</p></button>
                    <button><p>Destroy</p></button>
                </div>    
                </div>
            </div>

                
        )
        return(
            <div>

            </div>
                )

}
export default ProjectItems