import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Register } from './pages/RegisterPage';
import { Login } from './pages/LoginPage';
import { UserManagment } from './pages/UserManagmentPage';
import './App.css'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-managment' element={<UserManagment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

















