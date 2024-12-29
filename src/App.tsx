import './App.css'
import { Routes, Route } from 'react-router-dom'
import DistancePg from './pages/DistancePg'

function App() {


  return (
    <Routes>
      <Route path='/' element={<DistancePg/>}/>
    </Routes>
  )
}

export default App
