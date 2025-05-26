import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company.js';
import Navbar from './components/layouts/Navbar.js';
import Projects from './components/pages/Projects.js';
import Footer from './components/layouts/Footer.js';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Navbar/> 
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
