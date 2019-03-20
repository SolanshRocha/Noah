import React from 'react';
import News from './News';
import $ from'jquery';
import './Secthemas';

export default class Secthemas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/News', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <News key={i} item={pipa}></News>

                )
            })
            that.setState({articles: articles});
        })
    }

        render () {
            return (
                <div id="Contain">
                    {this.state.articles}
                </div>
            )
        }
}