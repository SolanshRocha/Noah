import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Themas from './Themas';
import Nav from './Nav';
import Secthemas from './Secthemas';
import Tercethemas from './Tercethemas';
import Cuartothemas from './Cuartothemas';
import Quintothemas from './Quintothemas';
import Sextothemas from './Sextothemas';
import './Container.css';

export default class Container extends React.Component {
    
    constructor(){
        super()
        this.state = {
        coverpage: []
        }
    }

    render () {
        return ( 
        <div id="Container">
                    <Router>
                        <Nav/>
                        <Route exact path="/" component = {Themas}/>
                        <Route path="/News" component = {Secthemas}/>
                        <Route path="/Stories" component = {Tercethemas}/>
                        <Route path="/Woman" component = {Cuartothemas}/>
                        <Route path="/Man" component = {Quintothemas}/>
                        <Route path="/start" component = {Sextothemas}/>
                    </Router>
        {this.state.coverpage}
        </div>
        )
    }
}