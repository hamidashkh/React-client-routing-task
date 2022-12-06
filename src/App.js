import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Examples from "./pages/Examples";
import Contacts from "./pages/Contacts";
import Navbar from "./Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
