import { useState } from 'react'
import CouterUi from './couterUi'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex justify-content-center " style={{ height: "100vh", alignItems: "center" }}>
        <CouterUi count={count} setCount={setCount} />
      </div>
    </>
  )
}

export default App
