import 'react-native-gesture-handler'
import React, {useState,useEffect} from 'react'
import Nav from './Nav'
import thunk from 'redux-thunk'
import {applyMiddleware , createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(rootReducer , applyMiddleware(thunk))

 function App() {
  return (
 <Provider store={store}>
   <Nav/>
 </Provider>
  );
}
  export default App




