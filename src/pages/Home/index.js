import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"; // Assuming you have an API service set up
import Loading from "../../components/Loading";
import "./home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    page: page,
                },
            });
            setMovies(response.data.results);
            setTotalPages(response.data.total_pages);
            setTotalResults(response.data.total_results);
            setLoading(false);
        }
        fetchMovies();
    }, [page]);

    function avancar() {
        setLoading(true);
        if (page < totalPages) {
            setPage(page + 1);
        }
    }

    function voltar() {
        setLoading(true);
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <div>
            <Loading loading={loading} />
            {movies.map((movie) => (
                <article key={movie.id}>
                    <Link to={`/filme/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Link>
                    <div className="description">
                        <h2>
                            <Link to={`/filme/${movie.id}`}>{movie.title}</Link>
                        </h2>
                        <hr />
                        <div className="buttons">
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <span>{movie.vote_average}</span>
                                <span>({movie.vote_count})</span>
                            </div>
                            <div className="actions">
                                <a href="#!">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </a>
                            </div>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </article>
            ))}
            <button onClick={voltar} disabled={page === 1}>
                Voltar
            </button>
            <button onClick={avancar} disabled={page === totalPages}>
                Avançar
            </button>
        </div>
    );
}

export default Home;
