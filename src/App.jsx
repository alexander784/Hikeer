import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExploreDestinations from './components/ExploreDestination';
import DestinationDetail from './components/DestinationDetail';
import Reserve from './pages/Reserve';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/destinations' element={<ExploreDestinations />} />
      <Route path='/destinations/:id' element={<DestinationDetail />}/>
      <Route path='/reserve' element={<Reserve />} />
      <Route path='/explore-destination' element={<ExploreDestinations />} />
    </Routes>
    </Router>
  );
}

export default App;
