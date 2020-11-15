import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Route} from 'react-router-dom'
import ImageData from './components/ImageData/ImageData'
import ImageScore from './components/ImageScore/ImageScore';
 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Route path='/' exact component={ImageData} />
      <Route path='/score' component={ImageScore} />
      </BrowserRouter>
    </div>
  )
}

export default App;
