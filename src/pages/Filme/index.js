import './filme-info.css';
import{ useParams, useHistory } from 'react-router-dom'
import api from '../../services/api';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';

export default function Filme(){
    const { id } = useParams(); // esse id é o parametro passado na rota que chama essa pagina
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() =>{

        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //se o id nao existe 
                history.replace('/'); // troca a rota atual para essa
                return; // nao continua nessa pagina
            }
            // console.log(response.data);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
        return () => {
            console.log('componente desmontado'); // quando sai dessa pagina o componente é desmontado
        }

    },[history, id]); // passa o id como dependencia do useEffect para que caso sofra alguma alteração no id execute novamente
    
    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || []; // se minhaLista estiver vazio ele filmesSalvos recebe vazio
        
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id) //some percore o array verificando se existe algo igual ao passado por parametro
        
        if(hasFilme){
            toast.error('você ja salvou esse filme');
            return; // para a execução do código
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');
    }


    if(loading){
        return(
            <div className="filme-info">
                <h1>carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={salvaFilme}> Salvar</button>
                <button onClick={()=>{}}> 
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailler
                    </a>
                </button>
                
            </div>
        </div>
    )
}