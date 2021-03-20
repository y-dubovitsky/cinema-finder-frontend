import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <div className="films">
                    <h2>What is Cinema Finder Service?</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, maiores ab nam incidunt perferendis pariatur accusantium dolorum amet quos? Quaerat ipsam exercitationem maiores molestias quis! Totam esse illo temporibus!
                </div>
                <div className="description">
                    <h2>Do you know..?</h2>
                    <p>A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. These images are generally accompanied by sound, and more rarely, other sensory stimulations. The word "cinema", short for cinematography, is often used to refer to filmmaking and the film industry, and to the art form that is the result of it.</p>
                    <small>https://en.wikipedia.org/wiki/Film</small>
                    {/* TODO Оформить */}
                </div>
            </div>
        )
    }
}