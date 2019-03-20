import React from 'react';
import Start from './Start';
import $ from'jquery';
import './Sextothemas';

export default class Sextothemas extends React.Component {

    constructor(){
        super();
        this.state = {
        articles: []
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/Start', function(data){
            console.log(data);
            let articles = data.map(function(pipa, i){
                return (
                    <Start key={i} item={pipa}></Start>

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