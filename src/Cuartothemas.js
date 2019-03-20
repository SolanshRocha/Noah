import React from 'react';
import Woman from './Woman';
import $ from'jquery';
import './Cuartothemas.css'
export default class Cuartothemas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/Woman', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <Woman key={i} item={pipa}></Woman>

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