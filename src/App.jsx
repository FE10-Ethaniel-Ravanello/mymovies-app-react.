import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { CountProvider } from './Context/context';

import Home from './Pages/Home'
import Liked from './Pages/Liked'
import Detail from './Pages/Detail';

const App = () =>  {

    return (
      <CountProvider>
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Liked' element={<Liked />}/>
          <Route path='/Detail' element={<Detail />}/>
          </Routes>
        </BrowserRouter>
      </CountProvider>
        

    )

}


export default App