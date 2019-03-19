import React from 'react';

export default class Secthemas extends React.Component {
    render () {
        console.log(this.props.item)
        return (
            <div className="Themas">
            <h2>{this.props.item.coverpage_category_name}</h2>
            <div className="Lupitavideos">
            <video src={process.env.PUBLIC_URL + this.props.item.coverpage_video} alt="Cannot load"></video>
            </div>
            <div className="Description">
            <p>{this.props.item.coverpage_description}</p>
            </div>
            
        </div>
        )
    }
}