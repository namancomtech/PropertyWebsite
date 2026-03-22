import Index from "../src/components/Index"
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "../src/components/About"
import Contact from "../src/components/Contact"
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
