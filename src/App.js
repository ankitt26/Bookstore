import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
