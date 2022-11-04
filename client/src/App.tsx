import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './pages/PhonesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartPages } from './pages/CartPages';
import { ROUTER } from './components/Header/HeaderList';
import { NotFoundPage } from './pages/NotFoundPage';
import { useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu';
import { PhoneDataProvider } from './context/DataContext';
import { CardProvider } from './context/CardContext';
import { ProductDetalePage } from './pages/ProductDetalePage/ProductDetalePage';

function App() {
  const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);
  return (
    <>
      <PhoneDataProvider>
        <CardProvider>
          {burgerMenuSelected ? (
            <BurgerMenu
              setBurgerMenuSelected={setBurgerMenuSelected}
              burgerMenuSelected={burgerMenuSelected}
            />
          ) : (
            <>
              <Header
                setBurgerMenuSelected={setBurgerMenuSelected}
                burgerMenuSelected={burgerMenuSelected}
              />
              <main className="section">
                <Routes>
                  <Route path={ROUTER.phones} element={<PhonesPage />} />
                  <Route path={ROUTER.cart} element={<CartPages />} />
                  <Route path={`${ROUTER.phones}/${ROUTER.productDetalePage}`} element={<ProductDetalePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        </CardProvider>
      </PhoneDataProvider>
    </>
  );
}

export default App;
