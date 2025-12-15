import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import BookTrialClass from './routes/BookTrialClass.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <link href="/src/style.css" rel="stylesheet"></link>
      </head>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial-class" element={<BookTrialClass />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
