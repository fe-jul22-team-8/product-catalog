import { Link, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartPages } from './pages/CartPages/CartPages';

function App() {
  return (
    <>
      <Header />
      <CartPages />

      {/* <nav>
        <Link to="/phones"></Link>
      </nav>

      <main className="section">
        <Routes>
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/cart" element={<CartPages />} />
        </Routes>
      </main> */}

      <Footer />
    </>
  );
}

export default App;
