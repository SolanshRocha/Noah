import React from 'react';

export default class New extends React.Component {
    render () {
        return (
            <div className="Secthemas">
            <h2>{this.props.item.articles_category_name}</h2>
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