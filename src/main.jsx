import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div>
      <h1>Welcome to Pizza Order Website</h1>
      <p>Order your favorite pizza now!</p>
      <Link to="/order">
        <button>Start Ordering</button>
      </Link>
    </div>
  );
};

export default Main;