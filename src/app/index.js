import React from "react";
import {render} from "react-dom";
// import {Router, Route, browserHistory} from "react-router"
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Root>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                    </Root>
                    <Route path="/home-single" component={Home}/>
                </div>
            </Router>
        );
    }
}

render(
    <App/>, window.document.getElementById("app"));