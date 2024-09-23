import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Index from "./Components/Index";
import CompleteGreeting from "./Components/PropsExample/CompleteGreeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPlanner from "./Components/ProjectPlanner";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projectPlanner" element={<ProjectPlanner />} />
        <Route path="/greeting" element={<CompleteGreeting />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />

        {/* Catch-all route for "Page Not Found" */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
