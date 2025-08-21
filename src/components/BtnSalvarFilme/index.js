import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function BtnSalvarFilme({ movie }) {
   
    const salvar = () => {
        let filmes = localStorage.getItem("filmes");
        filmes = filmes ? JSON.parse(filmes) : [];
        if (filmes.some((f) => f.id === movie.id)) {
            Swal.fire({
                title: "Já salvo!",
                text: "Este filme já foi salvo anteriormente.",
                icon: "info",
                confirmButtonText: "OK",
            });
            return;
        }
        filmes.push(movie);
        localStorage.setItem("filmes", JSON.stringify(filmes));

        Swal.fire({
            title: "Salvo!",
            text: "Filme salvo com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
        });
    };

    return (
        <a href="#!" onClick={salvar}>
            <FontAwesomeIcon icon={faThumbsUp} />
        </a>
    );
}

export default BtnSalvarFilme;
