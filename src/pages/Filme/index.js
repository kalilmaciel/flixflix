import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../../services/api";
import Loading from "../../components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./filme.css";

function Filme() {
    const navigate = useNavigate();
    const id = useParams().id;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function fetchMovies() {
            await api.get(`/movie/${id}`, {})
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
                    confirmButtonText: "OK"
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
                            <a href="#!">
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </a>
                        </div>
                    </div>
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
}

export default Filme;
