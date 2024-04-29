import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Gallery from './Gallery';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;