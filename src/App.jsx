import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyProjects from "./components/MyProjects";

export default function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}
