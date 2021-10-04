import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';


export default function App() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
      async function loadFilmes(){
        //await esperar trazer a requisição
        const response = await api.get('r-api/?api=filmes'); //  api tem a base url e o get concatena com a url passada por parametro
        // console.log(response.data);
        setFilmes(response.data);
      }

      loadFilmes();

    }, []);
    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome} />
                <Link to="/">Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
  
  
  // https://sujeitoprogramador.com/r-api/?api=filmes/  
  