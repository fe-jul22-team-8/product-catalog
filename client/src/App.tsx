import { Link, Route, Routes } from "react-router-dom";
import { PhonesPage } from "./components/pages/PhonesPage";
import './App.scss';

function App() {
  return (
    <>
      <nav>
        <Link to="/phones">
          Phones
        </Link>
      </nav>

      <main className="section">
        <Routes>
          <Route
            path="/phones"
            element={<PhonesPage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
