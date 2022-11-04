import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { ModalProvider } from './context/ModalContext';

const Root = () => (
  <Router>
    <ModalProvider>
    <App />
    </ModalProvider>
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Root />);
