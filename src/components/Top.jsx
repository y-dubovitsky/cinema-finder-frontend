import React from 'react';
import Search from './Search';

export default class Top extends React.Component {

    state = {
        finder: false
    }

    onFinderToggle = () => {
        this.setState({
            finder: !this.state.finder
        })
    }

    render() {

        const {onFindFilm} = this.props;

        return (
            <div className="top">
                <h1 onClick={() => this.onFinderToggle()}>Cinema Finder</h1>
                {this.state.finder ?
                    <Search onFindFilm={onFindFilm}/>
                    :
                    <div>
                        <span>Just a movie and nothing more</span>
                        <p>Fast and convenient service for finding a movie</p>
                    </div>
                }

            </div>
        )
    }
}