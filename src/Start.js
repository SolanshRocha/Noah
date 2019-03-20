import React from 'react';
import './Start.css';

export default class Start extends React.Component {
    render () {
        console.log(this.props.item)
        return (
            <div className="Secthemas">
                <h2>{this.props.item.articles_names}</h2>
                <div className="imgsec">
                    <img src={process.env.PUBLIC_URL + this.props.item.articles_photo} alt="HEY"/>
                </div>
                <div className="Subtitulo">
                    <p>{this.props.item.articles_title}</p>
                </div>
            </div>
        )
    }
}

