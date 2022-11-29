import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from './store'

import Home from './Pages/Home'
import Liked from './Pages/Liked'
import Detail from './Pages/Detail';

const App = () =>  {

    return (
      <Provider store={store}>
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Liked' element={<Liked />}/>
          <Route path='/Detail' element={<Detail />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
        

    )

}


export default App