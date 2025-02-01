import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import MyProjects from "../pages/MyProjects/MyProjects";

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
