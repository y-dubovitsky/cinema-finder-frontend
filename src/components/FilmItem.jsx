import React from 'react';

export default class FilmItem extends React.Component {

    render() {

        const { Title, Poster, Year } = this.props;

        return (
            <div className="film">
                <img src={Poster} alt={Title} />
                <h3>{Title}</h3>
                <span>{Title} ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem ut dolore est ullam molestias sint explicabo repudiandae quod magni?</span>
            </div>
        )
    }
}