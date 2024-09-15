import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BtnWhatsApp } from './components/BtnWhatsApp/BtnWhatsApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BtnWhatsApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
