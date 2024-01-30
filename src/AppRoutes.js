import { Routes, Route } from 'react-router-dom';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import HomePage from 'Pages/HomePage/HomePage';
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
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
