import { Route ,BrowserRouter, Switch} from "react-router-dom";

import Home from   './pages/Home';
import Header from './components/Header';
import Filme from './pages/Filme'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

// chamando dessa forma em todas as paginas exibirá o conteudo de header
// :id quando deve receber um parâmetro informa qual é 