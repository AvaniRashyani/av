
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Signup from './components/Signup';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
   
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<h1>home</h1>}></Route>
        <Route path='/add' element={<h1>home</h1>}></Route>
        <Route path='/update' element={<h1>home</h1>}></Route>
        <Route path='/logout' element={<h1>home</h1>}></Route>
        <Route path='/profile' element={<h1>home</h1>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
