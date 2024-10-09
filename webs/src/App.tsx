import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Drower from "./layout/drower/Drower";
import Nav from "./layout/nav/Nav";
import Dashboard from "./pages/Dashboard";
import Other from "./pages/Other";
 

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="drower-container">
          <Drower />
        </div>
        <main className="main">
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Other />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
