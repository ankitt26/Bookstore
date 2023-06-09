import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<div>categories</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
