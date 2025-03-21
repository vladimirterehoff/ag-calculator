
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SwipeSelect from "./pages/SwipeSelect";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:industry/:subIndustry" element={<Index />} />
          <Route path="/swipe" element={<SwipeSelect />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
