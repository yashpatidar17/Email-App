import { Route, Routes } from 'react-router'
import './App.css'
import { Link } from 'react-router-dom'
import { Inbox } from './Pages/Inbox'
import { Spam } from './Pages/Spam'
import { Trash } from './Pages/Trash'

function App() {
 

  return (
    <>
      <nav>
        <Link to="/">Inbox </Link>
        <Link to="/spam"> Spam </Link>
        <Link to="/trash">Trash</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inbox/>}/>
        <Route path="/spam" element={<Spam/>}/>
        <Route path="/trash" element={<Trash/>}/>
      </Routes>
    </>
  )
}

export default App
