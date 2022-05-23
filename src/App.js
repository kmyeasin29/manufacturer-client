import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
