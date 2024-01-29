import { Routes, Route } from 'react-router-dom';
import MainMenu from 'components/MainMenu/MainMenu';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesSearchPage from 'Pages/MoviesPage/MoviesPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from 'Pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'Pages/CastPage/CastPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'


const AppRoutes = () => {
    
    return (
      <>
        <MainMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesSearchPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/movies/cast" element={<CastPage />} />
          <Route path="/movies/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
}

export default AppRoutes;
