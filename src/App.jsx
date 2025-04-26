import "./styles/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
