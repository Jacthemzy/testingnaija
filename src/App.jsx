import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx';
import Uplaod from './pages/Upload/Upload.jsx';
import Success from './pages/Success/Success.jsx';
import Register from './pages/Register/Register.jsx';
import SuccessRegister from './pages/SuccessRegister/SuccessRegister.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/upload' element={<Uplaod/>} />
          <Route exact path='/upload' element={<Uplaod/>} />
          <Route exact path='/success' element={<Success/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/success-register' element={<SuccessRegister/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
