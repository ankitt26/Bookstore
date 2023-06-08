import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>path here</div>} />
        <Route path="/categories" element={<div>categories</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
