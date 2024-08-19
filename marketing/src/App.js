import React from "react";
import {Switch,Router,Route} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles'
import Pricing from "./components/Pricing";
import Landing from './components/Landing';

const App = ({history}) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                  <Switch>
                  <Route exact path="/pricing" component={Pricing} />
                  <Route path="/" component={Landing} />
                  </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

export default App;