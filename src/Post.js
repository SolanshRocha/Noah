import React from 'react';
import $ from 'jquery';

export default class Post extends React.Component {
    constructor(){
        super();
        this.state = {
            Comments: []
        }
    }

    handleSolansh() {
        let input = document.getElementById('Comentario').nodeValue
        if(input !== '') {
            $.post('http://localhost:4000/commentario', {commentario : input}, function(response){
                console.log(response);
            })
        }
    }

    componentWillMount() {
        let that = this;
        $.get('http://localhost:4000/commentario', function(data){
            let commentario = data.map(function(com, i){
                return (
                    <p key={i}>{com.commentario_body}</p>
                )
            })
            that.setState({Comments: commentario});
        })
    }

    render () {
        console.log(this.state.Comments);
        return (
            <div className="Commentariohere">
            <div id="CommentArea">
            {this.state.Comments}
            </div>
            <form className="lalaland" autoComplete="off">
            <div className="missingcomment">
            <input id="Comentario" type="text" name="Comments"></input>
            <button id="Commentbutt" onClick={() =>{this.handleSolansh()}}>Send</button>
            </div>
            </form>
            </div>
        )
    }
}