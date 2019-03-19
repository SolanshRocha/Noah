import React from 'react';
import Themas from './Themas';
import $ from 'jquery';
import Secthemas from './Secthemas';

export default class Container extends React.Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            coverpage: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/', function(data){
            let articles = data.map(function(pipa, i){
                return (
                    <Themas key={i} item={pipa}></Themas>
                )
            })
            that.setState({articles: articles});
        })

        $.get('http://localhost:4000/coverpage', function(data){
            let coverpage= data.map(function(opp, i){
                return(
                    <Secthemas key={i} item={opp}></Secthemas>

                )
            })
            that.setState({coverpage: coverpage});
        })
}

    render () {
        return ( 
        <div id="Container">
        <div id="Articles">
        {this.state.articles}
        </div>
        <div id="Coverpage">
        {this.state.coverpage}
        </div>
        </div>
        )
    }
}