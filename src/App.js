import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/search";
import Footer from "./components/footer";
import Write from "./pages/write";
import Single from "./pages/single";
import Navbar from "./components/navbar";
import Error from "./components/error";
import Under from "./pages/under";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/write" element={<Write />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/under/:id" element={<Under />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
