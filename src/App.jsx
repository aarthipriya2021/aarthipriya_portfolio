import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ActivityPage from './pages/ActivityPage'

function App() {

  return (
    <div>
      <Routes>
        <Route 
          path="/"
          element={<HomePage />}
        />
        <Route 
          path="/activity"
          element={<ActivityPage />}
        />
      </Routes>
    </div>
  )
}

export default App
