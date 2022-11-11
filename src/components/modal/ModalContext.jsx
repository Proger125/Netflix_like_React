import React from 'react';

const ModalContext = React.createContext(() =>
  console.log('You forgot to set up Modal Context'),
);
export default ModalContext;
