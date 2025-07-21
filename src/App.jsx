import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage/GamePage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/game' element={ <GamePage /> }></Route>
          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
