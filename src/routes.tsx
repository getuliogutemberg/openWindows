import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.tsx';
import { CloseAppPage } from './pages/CloseAppPage.tsx';
import { HomePage } from './pages/Home.tsx';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<App />}
          path='/'
        />

        <Route
          element={<CloseAppPage />}
          path='/close-app'
        />

        <Route
          element={<HomePage />}
          path='/home'
        />
      </Routes>
    </BrowserRouter>
  );
}
