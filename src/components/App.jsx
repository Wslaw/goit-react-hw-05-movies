import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu/MainMenu';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesSearchPage from 'Pages/MoviesSearchPage/MoviesSearchPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-search" element={<MoviesSearchPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
