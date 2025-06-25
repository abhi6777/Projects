import { useState } from 'react'
import Login from './login'
import SignUp from './signup'

import './App.css'

function App() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center pt-3" style={{ minHeight: '100vh', overflowY: 'auto' }}>      
      <Login />
      {/* <SignUp /> */}
      </div>
    </>
  )
}

export default App
