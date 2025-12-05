import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PropertyList } from './pages/PropertyList';
import { PropertyDetail } from './pages/PropertyDetail';
import { PropertyForm } from './pages/PropertyForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/create" element={<PropertyForm />} />
        <Route path="/edit/:id" element={<PropertyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;