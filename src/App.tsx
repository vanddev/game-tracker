import './App.css'
import  'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage/GamePage'
import HomePage from './pages/HomePage/HomePage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import TopBar from './components/TopBar/TopBar'
import SideMenu from './components/SideMenu/SideMenu'
import LibraryPage from './pages/LibraryPage/LibraryPage'
import FilteredGameListPage from './pages/FilteredGameListPage/FilteredGameListPage'
import { House, Library, LayoutGrid, ChartNoAxesColumn } from 'lucide-react';
import ExplorerPage from './pages/ExplorerPage/ExplorerPage';
import GenreGameListPage from './pages/GenreGameListPage/GenreGameListPage'
import ThemeGameListPage from './pages/ThemeGameListPage/ThemeGameListPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function App() {

  const sideMenuItems = [
    { link: "/", icon: House, label: 'Home'},
    { link: "/library", icon: Library, label: 'Library'},
    { link: "/explorer", icon: LayoutGrid, label: 'Explorer', routes: ["/genres", "/themes", "/game"]},
    // suggested: { link: "/", icon: Sparkles, label: 'Suggested'},
    { link: "/statistics", icon: ChartNoAxesColumn, label: 'Statistics'},
  ];

  return (
    <BrowserRouter>
        <TopBar />
        <SideMenu items={sideMenuItems} />
        <main className='main-content-container'>
          <Routes>
            <Route path='/game' element={ <GamePage /> }></Route>
            <Route path='/library/:category' element={ <FilteredGameListPage /> }></Route>
            <Route path='/library' element={ <LibraryPage /> }></Route>
            <Route path='/genres/:genreName' element={ <GenreGameListPage /> }></Route>
            <Route path='/themes/:themeName' element={ <ThemeGameListPage /> }></Route>
            <Route path='/statistics' element={ <StatisticsPage /> }></Route>
            <Route path='/explorer' element={ <ExplorerPage /> }></Route>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='*' element={ <NotFoundPage /> }/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
