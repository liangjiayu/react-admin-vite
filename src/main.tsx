import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import './styles/index.css';
import './components/icon-font';
import App from './app';

createRoot(document.getElementById('root')!).render(<App />);
