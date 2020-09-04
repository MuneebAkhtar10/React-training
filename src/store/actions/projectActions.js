export const createProject = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //make async calls to db

        const firestore = getFirestore();
        const firebase = getFirebase();

        //projects here is the name of collection
        // firestore.collection('projects').add({
        //     ...project,
        //     authorName: "Muneeb",
        //     authorId: 12345,
        //     createdAt: new Date()

        // }).then(()=> { dispatch({
        //     type:'CREATE_PROJECT', project});
        // }).catch((err) => {
        //     dispatch({type: 'CREATE_PROJECT_ERROR', err})
        // })

    }

};

//without firebase
// dispath({
//     type:'CREATE_PROJECT', project});