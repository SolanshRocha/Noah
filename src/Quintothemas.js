import React from 'react';
import Man from './Man';
import $ from'jquery';
import './Quintothemas'

export default class Quintothemas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/Man', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <Man key={i} item={pipa}></Man>

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