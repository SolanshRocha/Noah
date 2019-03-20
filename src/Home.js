import React from 'react';

export default class Home extends React.Component {
    render () {
        return (
            <div className="Themas">
                <h2>{this.props.item.coverpage_name}</h2>
                <div className="Lupitavideos">
                    <video src={process.env.PUBLIC_URL + this.props.item.coverpage_video} controls></video>
                </div>
                <div className="Description">
                <p>{this.props.item.coverpage_description}</p>
                </div>
            </div>
        )
    }
}