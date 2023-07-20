import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Fehler from '../pages/404Page/404Page';
import AboutUsPage from '../pages/aboutUsPage/AboutUsPage';
import ContactPage from '../pages/contactPage/ContactPage';
import GalleryPage from '../pages/galleryPage/GalleryPage';
import HomePage from '../pages/homePage/HomePage';
import PricePage from '../pages/pricePage/PricePage';
import Login from '../modules/account/login/Login';
import Registration from '../modules/account/registration/Registration';
import Konto from '../modules/account/konto/Konto';
import { AuthContext } from '../../context/AuthContext.js';
import { useAuth } from '../../hooks/auth.hook.js';

import './App.css';

function App() {
  const { login, logout, token, userId, isReady } = useAuth();


  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady }}>
      <div className="App">
        <main>
          <Router>
            <Routes>
              <Route path="/" index element={<HomePage />}></Route>
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="price" element={<PricePage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="konto" element={<Konto />} />

              <Route path="*" element={<Fehler />} />
            </Routes>
          </Router>

        </main>
      </div>

    </AuthContext.Provider>

  );
}

export default App;
