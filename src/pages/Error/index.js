import {Link} from 'react-router-dom';
import './error.css';

export default function Error (){
    return(
        <div className="erro">
            <h1>Essa pagina não existe</h1>
            <Link to="/" className="voltar">Voltar</Link>
        </div>
    )
}

