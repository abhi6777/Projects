import { useState } from 'react';
import Login from './login';
import SignUp from './signup';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div
        className="container-fluid d-flex flex-column align-items-center pt-3"
        style={{ minHeight: '100vh', overflowY: 'auto' }}
      >
        {isLogin ? (
          <Login switchView={() => setIsLogin(false)} />
        ) : (
          <SignUp switchView={() => setIsLogin(true)} />
        )}
      </div>
    </>
  );
}

export default App;
