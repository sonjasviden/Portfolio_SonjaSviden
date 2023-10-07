import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import useThemeContext from "./hooks/useThemeContext";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";

const App = () => {
  const { isDarkMode } = useThemeContext();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Lägg till isLoading-tillstånd

  useEffect(() => {
    // Simulera laddningstid
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ändra 1000 till önskad laddningstid i millisekunder
  }, []);

  const cssClasses = classNames({
    'bg-dark text-white': isDarkMode,
  });

  return (
    <div id="App" className={cssClasses}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Visa Loader om isLoading är sant, annars visa riktig innehåll */}
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/resume" element={<ResumePage />} />
              </Routes>
              <Footer />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
