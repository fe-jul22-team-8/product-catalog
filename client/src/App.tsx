import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './pages/PhonesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartPages } from './pages/CartPages';
import { ROUTER } from './components/Header/HeaderList/HeaderList';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <main className="section">
        <Routes>
          <Route path={ROUTER.phones} element={<PhonesPage />} />
          <Route path={ROUTER.cart} element={<CartPages />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
