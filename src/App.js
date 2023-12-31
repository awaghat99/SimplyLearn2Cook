import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar/Navbar";
import ComingSoon from "./pages/ComingSoon";
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/class/:id" element={<ClassPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
