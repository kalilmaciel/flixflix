import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../services/api";
import Loading from "../../components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faVideo } from "@fortawesome/free-solid-svg-icons";

import "./filme.css";
import BtnSalvarFilme from "../../components/BtnSalvarFilme";

function Filme() {
    const navigate = useNavigate();
    const id = useParams().id;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            await api
                .get(`/movie/${id}`, {})
                .then((res) => {
                    setMovie(res.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    Swal.fire({
                        title: "Erro!",
                        text: "Filme inexistente!",
                        icon: "error",
                        confirmButtonText: "OK",
                    }).then(() => {
                        navigate("/");
                    });
                });
        }
        fetchMovies();
    }, [id, navigate]);

    return (
        <div>
            <Loading loading={loading} />
            {movie && (
                <div className="container">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <h1>{movie.title}</h1>
                    <hr />
                    <div className="buttons">
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{movie.vote_average}</span>
                            <span>({movie.vote_count})</span>
                        </div>
                        <div className="actions">
                            <a
                                href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faVideo} />
                            </a>
                            <BtnSalvarFilme movie={movie} />
                        </div>
                    </div>
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
}

export default Filme;
