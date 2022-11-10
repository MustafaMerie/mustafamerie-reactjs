import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FavoritesProductsScreen from './screens/FavoritesProductsScreen';
import Nav from './components/Nav';
import ProductsScreen from './screens/ProductsScreen';
import ProductScreen from './screens/ProductScreen';
import AddNewProductScreen from './screens/AddNewProductScreen';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductsScreen />}></Route>
        <Route path='/favorites' element={<FavoritesProductsScreen />}></Route>
        <Route path='/product/:id' element={<ProductScreen />}></Route>
        <Route path='/addProduct' element={<AddNewProductScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
