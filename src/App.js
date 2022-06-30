import './App.css';
import Navbar from './components/Navbar'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from './components/Books';
import Category from './components/Category';
import User from './components/User';
import Home from './components/Home';
// import Add from './components/addtest';

function App() {
  return (
    <Router>
         <div>
            <Navbar />
            
            <div className="content">    
              <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/Books" element={<Home />} />              
                 <Route path="/Category" element={<Category />} />                            
                <Route path="/User" element={<User />} />
              </Routes>   
            </div> 
                   
        </div>
       </Router>
  );
}

export default App;
