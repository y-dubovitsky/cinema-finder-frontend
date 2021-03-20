import React from 'react';
import Search from './Search';

export default class Top extends React.Component {

    state = {
        isSearch: false,
        intervalID: null
    }

    componentDidMount() {
        this.setState({
            intervalID: setInterval(() => {
                document.querySelector('#top-arrow').classList.toggle('active-arrow');
            }, 500)
        }) 
    }

    onIsSearchToggle = () => {
        this.setState({
            isSearch: !this.state.isSearch
        });
        clearInterval(this.state.intervalID);
    }

    render() {

        const { onFindFilm } = this.props;

        return (
            <div className="top">
                <h1 onMouseEnter={() => this.onIsSearchToggle()}><i id="top-arrow" class="fas fa-arrow-right"></i>Cinema Finder</h1>
                <div id="search" className={this.state.isSearch ? "active" : ""}>
                    <Search onFindFilm={onFindFilm} />
                </div>
                <div id="top-span" className={this.state.isSearch ? "active" : ""}>
                    <span>Just a movie and nothing more</span>
                    <p>Fast and convenient service for finding a movie</p>
                </div>
            </div>
        )
    }
}