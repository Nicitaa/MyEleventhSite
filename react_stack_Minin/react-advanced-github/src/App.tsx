import {Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FavoritesPage } from './pages/FavoritesPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favourites' element={<FavoritesPage/>}/>
    </Routes>
    </>
    )
}

export default App
