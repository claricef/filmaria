import { Route ,BrowserRouter, Switch} from "react-router-dom";

import Home from   './pages/Home';
import Header from "./components/Header";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/> 
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

// chamando dessa forma em todas as paginas exibirá o conteudo de header