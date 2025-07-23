import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Bounce, ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/scrollToTop";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="flex items-center">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home pageTitle="Bluecoder Tech - Home" />}
          />
          <Route
            path="/about"
            element={<About pageTitle="Bluecoder Tech - About" />}
          />
          <Route
            path="/services"
            element={<Services pageTitle="Bluecoder Tech - Services" />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio pageTitle="Bluecoder Tech - Portfolio" />}
          />
          <Route
            path="/contact"
            element={<Contact pageTitle="Bluecoder Tech - Contact" />}
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </main>
  );
};

export default Layout;
