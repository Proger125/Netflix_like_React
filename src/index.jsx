import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import Root from './Root';
import movieDefaultLoader from './loaders/movieLoader';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/search',
    element: <App />,
    loader: movieDefaultLoader,
  },
  {
    path: '/search/:searchQuery',
    element: <App />,
    loader: movieDefaultLoader,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();
