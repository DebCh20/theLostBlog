import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Herosection from './Herosection/Herosection';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage/Loginpage';
import Blogpage from './Blogpage/Blogpage';
import Blogpost from './Blogpost/Blogpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/><br/><br/><br/>     
      <Routes>
        <Route path="/" element={ <Herosection/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/blog" element={<Blogpage/>}/>
        <Route path="/blogpost" element={<Blogpost/>}/>
      </Routes>
    </div>
  );
}

export default App;
