import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";
import Erro from "./pages/Erro";
import Header from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter basename="/flixflix">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filmes" element={<Filme />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/filme/:id?" element={<Filme />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default RoutesApp;
