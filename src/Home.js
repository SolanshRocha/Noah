import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render () {
        return (
            <div id={"Themas" + this.props.item.coverpage_category_id}>
{/*             <h2>{this.props.item.coverpage_name}</h2> */}
                <div className="Lupitavideos">
                    <video id={'video' + this.props.item.coverpage_category_id} src={process.env.PUBLIC_URL + this.props.item.coverpage_video} controls></video>
                </div>
                <div className="Description">
{/*                 <p>{this.props.item.coverpage_description}</p> */}
                </div>
            </div>
        )
    }
}