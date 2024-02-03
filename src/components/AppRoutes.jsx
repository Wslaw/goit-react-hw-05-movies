import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const MoviesPage  = lazy(()=> import('Pages/MoviesPage/MoviesPage'));
const HomePage = lazy(()=> import('Pages/HomePage/HomePage'));
const NotFoundPage = lazy(()=> import('Pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(()=> import('Pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(()=> import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));




// import MoviesPage from 'Pages/MoviesPage/MoviesPage';
// import HomePage from 'Pages/HomePage/HomePage';
// import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from 'Pages/MovieDetailsPage/MovieDetailsPage';
// import CastPage from 'Pages/CastPage/CastPage';
// import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';






const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
