import "./sobre.css";
import fotoPerfil from  "../../img/foto_perfil.jpg"

function Sobre() {
    return (
        <article>
            <img
                src={fotoPerfil}
                alt="Foto de Perfil"
            />
            <div className="description">
                <h2>
                    Sobre o FlixFlix
                </h2>
                <hr />
                <p>
                    Olá, meu nome é Kalil Maciel e sou Desenvolvedor Senior com experiência em desenvolvimento web.
                </p>
                <p>
                    FlixFlix é uma aplicação desenvolvida para praticar habilidades de programação em React.
                    A aplicação permite que os usuários explorem filmes, vejam detalhes, e adicionem filmes aos favoritos.
                    É uma demonstração simples de como construir uma aplicação web interativa usando React e a API do The Movie Database (TMDB).
                </p>
                <p>
                    Para mais informações, você pode visitar o repositório do projeto no 
                    <a href="https://github.com/kalilmaciel/flixflix" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                </p>
            </div>
        </article>
    );
}

export default Sobre;
