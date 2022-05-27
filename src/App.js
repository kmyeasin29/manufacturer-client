import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import RequireAuth from './pages/Auth/RequireAuth';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound';
import Purchase from './pages/Purchase';
import Dashboard from './pages/Dashboard';
import MyOrder from './pages/MyOrder/MyOrder';
import React, { useState } from 'react';
import Tools from './pages/Tools/Tools';
import Review from './pages/Reviews/Review';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>
        }></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/order' element={<MyOrder></MyOrder>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
