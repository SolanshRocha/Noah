import React from 'react';
import Home from './Home';
import $ from'jquery';
import './Themas.css';
export default class Themas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/coverpage', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <Home key={i} item={pipa}></Home>
                )
            })
            that.setState({articles: articles});
        })

    }

     render () {
        return (
            <div id="ContainerG">
                {this.state.articles}
            </div>
        )
}
}










