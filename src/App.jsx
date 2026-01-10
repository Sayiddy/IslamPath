import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import BookTrialClass from './routes/BookTrialClass.jsx'
import ContactUs from './routes/ContactUs.jsx'
import Pricing from './routes/Pricing.jsx'
import Course from './routes/Course.jsx'
import Courses from './routes/Courses.jsx'
import AboutUs from './routes/AboutUs.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial-class" element={<BookTrialClass />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseName" element={<Course />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
