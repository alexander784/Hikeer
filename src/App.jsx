import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExploreDestinations from './components/ExploreDestination';
import Birds from './pages/Chaka';
import DestinationDetail from './components/DestinationDetail';
import Reserve from './pages/Reserve';
import Signin from './components/Signin';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
    <Navbar className="fixed"/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/destinations' element={<ExploreDestinations />} />
      <Route path='/destinations/:id' element={<DestinationDetail />}/>
      <Route path='/reserve' element={<Reserve />} />
      <Route path='/exploredestination' element={<ExploreDestinations />} />
      <Route path='/signin' element={<Signin />}/>
    </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
