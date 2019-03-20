import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Nav extends Component {
    render () {
        return (
                <div>
                    <ul id ="Nav">
                        <li>
                            <Link to ="/"> Home </Link>
                        </li>
                        <li>
                            <Link to ="/News">News</Link>
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
                            <Link to="/Start">Start surfing</Link>
                        </li>
                    </ul>
                </div>
        )
    }
}







