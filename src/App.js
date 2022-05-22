import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
