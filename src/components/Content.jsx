import React from 'react';
import FilmItemList from './FilmItemList';

export default class Content extends React.Component {

    render() {

        const {filmItemList}= this.props;

        return (
            <div className="content">
                <h1>You were looking for ...</h1> 
                <FilmItemList filmItemList={filmItemList}/>
            </div>
        )
    }
}