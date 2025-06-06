
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./componets/screens/home";
import Sobre from "./componets/screens/sobre";
import Contato from "./componets/screens/contato";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}