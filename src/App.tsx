import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import useThemeContext from "./hooks/useThemeContext"
import classNames from "classnames"

const App = () => {
  const { isDarkMode } = useThemeContext()

  const cssClasses = classNames({
    'bg-dark text-white': isDarkMode,
  })
  return (
    <div id="App" className={cssClasses}>
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
