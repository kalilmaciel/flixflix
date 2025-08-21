import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import BtnRemoverFilme from "../../components/BtnRemoverFilme";

import "./favoritos.css";

function Favoritos() {
    //Lista dos filmes
    const [movies, setMovies] = useState([]);

    //Controlador do estado da cortina de loading
    const [loading, setLoading] = useState(true);

    //Controlador do estado da lista de filmes
    //Útil pra forçar a atualização da lista de filmes quando algum filme for desfavoritado
    const [updateList, setUpdateList] = useState(0);

    useEffect(() => {
        const savedMovies = localStorage.getItem("filmes");
        setMovies(savedMovies ? JSON.parse(savedMovies) : []);
        setLoading(false);
    }, [updateList]);

    return (
        <div>
            <Loading loading={loading} />
            {movies.map((movie) => (
                <article key={movie.id}>
                    <Link to={`/filme/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Link>
                    <div className="description">
                        <h2>
                            <Link to={`/filme/${movie.id}`}>{movie.title}</Link>
                        </h2>
                        <hr />
                        <div className="buttons">
                            <div className="actions">
                                <BtnRemoverFilme
                                    movie={movie}
                                    setUpdateList={setUpdateList}
                                />
                            </div>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </article>
            ))}

            {movies.length === 0 && !loading && (
                <p className="mensagem">Nenhum filme favorito encontrado.</p>
            )}
        </div>
    );
}

export default Favoritos;
