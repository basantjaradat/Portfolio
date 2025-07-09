import { Routes, Route } from 'react-router-dom';
import Home from './pages';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Remove the others if you haven't created them yet */}
    </Routes>
  );
};

export default AppRoutes;
