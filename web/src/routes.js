import {Route, BrowserRouter, Switch} from 'react-router-dom';

import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private';

import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {CriarConta} from './pages/CriarConta';
import { CadastrarConsulta } from './pages/CadastrarConsulta';


const Routes = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route component = { Login }  path="/" exact />
                    <RoutesPrivate component = { CriarConta }  path="/CriarConta" exact />
                    <RoutesPrivate component = { Home }  path="/Home" />  
                    <RoutesPrivate component = { CadastrarConsulta }  path="/CadastrarConsulta" />  
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}

export default Routes;