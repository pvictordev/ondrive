import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Admin from "./pages/Admin";

function App() {
  // is loged in
  const [isAuthentificated, setIsAuthentificated] = useState(() => {
    const storedValue = localStorage.getItem("isAuthentificated");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const handleAuthToggle = () => {
    setIsAuthentificated((prevIsAuth) => !prevIsAuth);
  };

  return (
    <>
      <Navbar
        isAuthentificated={isAuthentificated}
        handleAuthToggle={handleAuthToggle}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="blog" element={<Blog />} />

        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="login"
          element={
            <LogIn
              isAuthentificated={isAuthentificated}
              setIsAuthentificated={setIsAuthentificated}
            />
          }
        />
        {/* //admin */}
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
