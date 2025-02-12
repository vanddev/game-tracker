import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage/GamePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <GamePage /> }/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
