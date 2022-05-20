
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './routes';

import history from './history';



export default function app() {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    )
}

//const App = () =>  <Routes />

//export default App;
