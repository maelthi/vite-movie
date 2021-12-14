import { BrowserRouter, Routes, Route } from "react-router-dom"

import Movies from "@pages/Movies/Movies"
import Home from "@pages/Home/Home"
import Actors from "@pages/Actors/Actors"

import "./App.css"

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear())
}

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
