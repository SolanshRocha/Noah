import React from 'react';
import $ from 'jquery';
import Themas from './Themas';

export default class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/articles', function(data){
            let articles = data.map(function(pipa, i){
                return (
                    <Themas key={i} item={pipa}></Themas>
                )
            })
            that.setState({articles: articles});
        })

    }

   
    render () {
        
        return (
            <ul id ="Nav">
            <div id="Articles">
            {this.state.articles}
            </div>
            <li>News</li>
            <li>Stories</li>
            <li>Woman high Performances</li>
            <li>Man high Performances</li>
            <li>Start surfing</li>
            </ul>
        )
    }
}

