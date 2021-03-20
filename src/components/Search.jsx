import React from 'react';

export default class Search extends React.Component {

    state = {
        text: ''
    }

    onInputText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {

        const { onFindFilm, active } = this.props;
        { console.log({ active }) }

        return (
            <div>
                <input onChange={this.onInputText} type="text" name="cinema" placeholder="... input cinema" />
                <button onClick={() => onFindFilm(this.state.text)}>Find</button>
            </div>
        )
    }
}