import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div id="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
