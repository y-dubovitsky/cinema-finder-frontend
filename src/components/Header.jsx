import React from 'react';
import About from './About';
import $ from 'jquery';

export default class Header extends React.Component {

    componentDidMount() {
        $(document).on("scroll", function () {
            if ($(window).scrollTop() === 0) {
                $('header').removeClass('fixed');
            } else {
                $('header').addClass('fixed');
            }
        })
    }

    scrollPageUp = (id) => {
        $('html, body').animate({
            scrollTop: $('#' + id).offset().top
        }, 500);
    }

    render() {
        return (
            <header>
                <div id="logo" onClick={() => this.scrollPageUp('logo')}>
                    <span><i class="fas fa-search">CFinder</i></span>
                    </div>
                <About />
            </header>
        )
    }
}