import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Layout from './layouts/layout';
import Home from './pages/home/home';
import About from './pages/home/about';

const App = () => {
  return (
   <>
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App