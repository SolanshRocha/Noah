import React from 'react';
import Secthemas from './Secthemas';
import $ from 'jquery';

export default class Container extends React.Component {

    constructor(){
        super();
        this.state = {
            coverpage: []
        }
    }

    
    componentWillMount() { 
        let that = this
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
        <div id="Coverpage">
        {this.state.coverpage}
        </div>
        </div>
        )
    }
}