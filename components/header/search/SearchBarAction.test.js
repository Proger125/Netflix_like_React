/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchBarAction from './SearchBarAction';

describe('Search Bar actions tests', () => {
  let router;
  const mockesOnSubmit = jest.fn();
  beforeAll(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLoaderData: () => ({
        searchQuery: '',
        genreParam: '',
        sortBy: '',
      }),
      useNavigate: () => jest.fn(),
    }));
    jest.mock('formik', () => ({
      ...jest.requireActual('formik'),
    }));
    router = createBrowserRouter([
      {
        path: '/',
        element: <SearchBarAction onSubmit={mockesOnSubmit} />,
        loader: () => {
          return { searchQuery: '' };
        },
      },
    ]);
  });

  test('renders search bar actions component', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('renders search bar actions component and submit search', async () => {
    render(<RouterProvider router={router} />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    const searchButton = screen.getByText('Search');
    await userEvent.type(input, 'Movie');
    await userEvent.click(searchButton);
    expect(input.value).toBe('Movie');
    await waitFor(() => {
      expect(mockesOnSubmit).toHaveBeenCalled();
    });
  });
});
