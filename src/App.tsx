import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FavoritesProducts from './components/FavoritesProducts';
import Nav from './components/Nav';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductsList />}></Route>
        <Route path='/favorites' element={<FavoritesProducts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
