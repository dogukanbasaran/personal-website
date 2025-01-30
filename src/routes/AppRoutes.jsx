import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MyProjects from "../pages/MyProjects";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/projects" element={<MyProjects />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
