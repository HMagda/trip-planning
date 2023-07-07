import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './routes/HomePage';

const App = () => {
  return (
    <Router >
    <Routes>
      <Route path='/' element={<HomePage />} />
        <Route
          path='/home'
          element={<HomePage />}
        />
    </Routes>
  </Router>
   
  )
}

export default App