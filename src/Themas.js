import React from 'react';
import New from './New';
import $ from'jquery';

export default class Themas extends React.Component {

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
                    <New key={i} item={pipa}></New>

                )
            })
            that.setState({articles: articles});
        })

    }

    render () {
        return (
    <div id="articles">
        {this.state.articles}
        </div>
        )
}
}










