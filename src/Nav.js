import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Themas from './Themas';


export default class Nav extends Component {

    render () {
        return (
            <Router>
                <div>
                    <ul id ="Nav">
                        <li>
                            <Link to ="/">News</Link>
                        </li>
                        <li>
                            <Link to ="/Stories">Stories</Link>
                        </li>
                        <li>
                            <Link to="/Woman">Woman high Performances</Link>
                        </li>
                        <li>
                            <Link to="/Man"> Man high Performances</Link>
                        </li>
                        <li>
                            <Link to="/Start" >Start surfing</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component = {Themas}/>
                    <Route path="/Stories" component = {Stories}/>
                    <Route path="/Woman" component = {Woman}/>
                    <Route path="/Man" component = {Man}/>
                    <Route path="/start" component = {Start}/>
                </div>
            </Router>


        )
    }
}

function News() {
        return (
            <div>
                <h1>
                    News
                </h1>
            </div>
    )
}

function Stories() {
    return (
        <div>
            <h1>
                Stories
            </h1>
        </div>
)
}

function Woman() {
    return (
        <div>
            <h1>
                Woman
            </h1>
        </div>
)
}
function Man() {
    return (
        <div>
            <h1>
                Man
            </h1>
        </div>
)
}
function Start() {
    return (
        <div>
            <h1>
                Start
            </h1>
        </div>
)
}







