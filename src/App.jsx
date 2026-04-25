import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Toggleswitch from './Toggleswitch'
import Showhide from './Showhide'
import Darkmode from './darkmode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

    <div className="flex">
<Routes>
  <Route path='/' element={<Darkmode />} />       
  <Route path='/hide' element={<Showhide />} />
  <Route path='/dhide' element={<Darkmode />} />
</Routes>
      <Toggleswitch />


    </div>
    </Router>

    </>
  )
}

export default App
