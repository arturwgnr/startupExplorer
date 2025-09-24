import Landing from './pages/Landing'
import MainPage from './pages/MainPage'
import Favourites from './pages/Favourites'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/startups' element={<MainPage/>} />
      <Route path='/favourites' element={<Favourites/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
