import React from 'react';
import FilmItemList from './FilmItemList';

export default class Main extends React.Component {
    render() {
        return(
            <div id="main">
                <div className="description">
                    <h2>Balalal</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quae nihil magni beatae sint eius, obcaecati esse, quo magnam laudantium animi qui dolore accusamus eos. Sit sed animi recusandae, porro accusamus amet enim similique molestiae ducimus? Vitae saepe placeat exercitationem, et nesciunt aperiam nam asperiores eveniet! Quasi animi aut quo?
                </div>
                <div className="films">
                    <h2>Bla bla</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, maiores ab nam incidunt perferendis pariatur accusantium dolorum amet quos? Quaerat ipsam exercitationem maiores molestias quis! Totam esse illo temporibus!
                </div>
                {/* <FilmItemList/> */}
            </div>
        )
    }
}