import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import Cases from "./containers/pages/Cases";
import Services from "./containers/pages/Services";
import About from "./containers/pages/About";
import Carrers from "./containers/pages/Carrers";
import Blog from "./containers/pages/Blog";
import Contact from "./containers/pages/Contact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
