import './App.css';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { Blog } from './pages/Blog';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          <Link to={"/"}>Home</Link>
        </Router>
    </div>
  );
}

export default App;
