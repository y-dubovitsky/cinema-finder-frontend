import React from 'react';
import FilmItem from './FilmItem';

export default class FilmItemList extends React.Component {
    render() {

        const { filmItemList } = this.props;

        return (
            <div className="content">
            {filmItemList.map(film => {
                return(
                    <div key={film.imdbID}>
                        <FilmItem {...film}/>
                    </div>
                )
            })}
            </div>
        )
    }
}