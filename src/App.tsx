import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FavoritesProductsScreen from './screens/FavoritesProductsScreen';
import Nav from './components/Nav';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductsScreen />}></Route>
        <Route path='/favorites' element={<FavoritesProductsScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
