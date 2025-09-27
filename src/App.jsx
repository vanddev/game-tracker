import './App.css'
import  'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage/GamePage'
import HomePage from './pages/HomePage/HomePage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import GenreGamesPage from './pages/GenreGamesPage/GenreGamesPage'
import TopBar from './components/TopBar/TopBar'
import SideMenu from './components/SideMenu/SideMenu'

function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <SideMenu />
        <main className='main-content-container'>
          <Routes>
            <Route path='/genres/:genreName' element={ <GenreGamesPage /> }></Route>
            <Route path='/game' element={ <GamePage /> }></Route>
            <Route path='/statistics' element={ <StatisticsPage /> }></Route>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='*' element={ <HomePage /> }/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
