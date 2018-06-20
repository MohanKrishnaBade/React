import React from "react";
import {render} from "react-dom";

import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Root} from "./components/Root";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path={"/"} component={Root}/>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/user/:id"} component={User}/>
                </div>
            </BrowserRouter>
        );
    }
}

render(<App/>, window.document.getElementById("app"));