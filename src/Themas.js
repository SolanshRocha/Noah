import React from 'react';

export default class Themas extends React.Component {
    render () {
        console.log(this.props.item)
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










