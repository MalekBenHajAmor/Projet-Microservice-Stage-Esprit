import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Sign_up from './Components/Sign_up';
import Home from './Components/Home';
import Sign_in from './Components/Sign-in';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Header /><Home /><Contact /></>} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/sign_in" element={<Sign_in />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
