import { Link, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import './App.scss';
import { Header } from './components/Header/Header';

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
        </Routes>
      </main>
    </>
  );
}

export default App;
