import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from "./pages/Erro";
import Header from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filmes" element={<Filme />} />
                    <Route path="/filme/:id?" element={<Filme />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default RoutesApp;
