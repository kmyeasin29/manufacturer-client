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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/' element={<Portfolio></Portfolio>
        }></Route>
        <Route path='/portfolio' element={
          <RequireAuth>
            {/* <Portfolio></Portfolio> */}
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
