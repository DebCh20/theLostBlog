import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Herosection from './Herosection/Herosection';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/><br/><br/><br/>     
      <Routes>
        <Route path="/" element={ <Herosection/>}/>
        <Route path="/login" element={<Loginpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
