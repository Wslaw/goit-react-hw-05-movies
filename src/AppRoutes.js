import { Routes, Route } from 'react-router-dom';
// import MainMenu from 'components/MainMenu/MainMenu';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesSearchPage from 'Pages/MoviesPage/MoviesPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from 'Pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'Pages/CastPage/CastPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />} />
          <Route path="movies/:movieId/cast" element={<CastPage />} />
          <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
