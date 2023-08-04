
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Addtopphoto from './components/Addtophoto';
import Allphoto from './components/Allphoto';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/addtop" element={<Addtopphoto/>} />
        <Route path="/addall" element={<Allphoto/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
