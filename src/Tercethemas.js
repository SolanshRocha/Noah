import React from 'react';
import Stories from './Stories';
import $ from'jquery';
import './Tercethemas.css'

export default class Tercethemas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/Stories', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <Stories key={i} item={pipa}></Stories>

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