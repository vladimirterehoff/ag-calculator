import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:industry/:subIndustry" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;