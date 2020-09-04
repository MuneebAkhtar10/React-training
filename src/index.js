import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
//redux part
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
//Now we will use provider so that application can use our store
import {Provider} from 'react-redux'
//thunk is basically a middleware
import thunk from 'redux-thunk'

//firebase
import {createFirestoreInstance,reduxFirestore,getFirestore} from 'redux-firestore'
import { ReactReduxFirebaseProvider ,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
//applymiddleware takes list to interact with db
//we are using compose to add extra argument 
const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
  reduxFirestore(firebase,fbConfig),
  // reactReduxFirebase(fbConfig)

  )
);
//////

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
////////


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
