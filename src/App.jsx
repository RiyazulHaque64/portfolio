import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
