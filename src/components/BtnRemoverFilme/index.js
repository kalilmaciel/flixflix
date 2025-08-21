import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function BtnRemoverFilme(props) {
    const { movie, setUpdateList } = props;

    const remover = () => {
        let filmes = localStorage.getItem("filmes");
        filmes = filmes ? JSON.parse(filmes) : [];
        if (!filmes.some((f) => f.id === movie.id)) {
            Swal.fire({
                title: "Filme inexistente!",
                text: "Este filme não foi salvo anteriormente.",
                icon: "info",
                confirmButtonText: "OK",
            });
            return;
        }
        filmes = filmes.filter((f) => f.id !== movie.id);
        localStorage.setItem("filmes", JSON.stringify(filmes));

        Swal.fire({
            title: "Removido!",
            text: "Filme removido com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
        });
        setUpdateList(movie.id);
    };

    return (
        <a href="#!" onClick={remover}>
            <FontAwesomeIcon icon={faThumbsDown} />
        </a>
    );
}

export default BtnRemoverFilme;
