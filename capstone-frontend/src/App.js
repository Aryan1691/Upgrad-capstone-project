import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './common/header/Header';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Products from './components/products/Products';
import { useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' exact element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;