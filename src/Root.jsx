import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({
      pathname: '/search',
    });
  }, []);
  return <>Redirect</>;
}
