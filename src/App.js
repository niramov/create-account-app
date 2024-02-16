import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import routes from './routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main()} element={<MainPage />} />
        <Route path={routes.success()} element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
