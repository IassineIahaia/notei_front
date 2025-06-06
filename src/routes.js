
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./componets/screens/home";
import Register from "./componets/screens/auth/register";
import Login from "./componets/screens/auth/login";
import NoteScreen from "./componets/screens/notes/index";
import UserEdit from "./componets/screens/users";



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

            </Switch>
        </BrowserRouter>
    );
}