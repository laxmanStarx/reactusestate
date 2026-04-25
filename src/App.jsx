import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Toggleswitch from './Toggleswitch'
import Showhide from './Showhide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

    <div className="flex">

      <Routes>
        <Route path='/' element={<Showhide />}>
        
        </Route>
      </Routes>

      <Toggleswitch />


    </div>
    </Router>

    </>
  )
}

export default App
