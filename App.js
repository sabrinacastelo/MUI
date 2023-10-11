import React, { useState } from 'react';
import Main from './components/Main';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <Main /> : <Login />}
    </div>
  );
};

export default App;
