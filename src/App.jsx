import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExploreDestinations from './components/ExploreDestination';
import Birds from './pages/Chaka';
import DestinationDetail from './components/DestinationDetail';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/destinations' element={<ExploreDestinations />} />
      <Route path='/destinations/:id' element={<DestinationDetail />}/>
      
      
    </Routes>
    </Router>
  );
}

export default App;
