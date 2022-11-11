import React from 'react';

const SelectedMovieContext = React.createContext(() =>
  console.log('You forgot to set up Selected Movie Context'),
);
export default SelectedMovieContext;
