import { Link, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartPages } from './pages/CartPages';

function App() {
  return (
    <>
      <Header />

      <nav>
        <Link to="/phones"></Link>
      </nav>

      <main className="section">
        <Routes>
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/cart" element={<CartPages />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
