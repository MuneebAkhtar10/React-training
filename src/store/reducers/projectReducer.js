const initState={
    //creating dummy data
    projects: [
        {id:1, title:"wowww", content: "blah blah blah"},
        {id:2, title:"wowwwwwww", content: "blah blah blah"},
        {id:3, title:"wowwwwwwwwwww", content: "blah blah blah"}

    ]
} 

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("created project",action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("created Error",action.err)
            return state;
        default:
            return state;    
    }
}
export default projectReducer