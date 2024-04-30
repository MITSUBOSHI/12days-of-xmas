import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Quiz from './Quiz';
import Gallery from './Gallery';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;