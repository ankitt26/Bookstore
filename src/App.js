import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
