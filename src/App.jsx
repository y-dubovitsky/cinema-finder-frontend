import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Top from './components/Top';
import Content from './components/Content';
import Contacts from './components/Contacts';
import React from 'react';

export default class App extends React.Component {

  state = {
    filmItemList: [],
  }

  componentDidMount() {
    this.onFindFilm();
  }

  componentDidUpdate() {
    console.log('App updated with state' + this.state.filmItemList);
  }

  onFindFilm = async (name) => {
    let films = [];

    if(name === undefined) { //TODO Убрать заглушку
      name = 'matrix';
    }

    const result = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=641f3ad9&s=${name}`)
      .then(data => {
        return data.json()
      })
      .then(json => {
        this.setState({ //TODO Вынести в отдельный метод?
          filmItemList: json.Search
        })
      })
      .catch(error => console.log(error));

    return await films;
  }

  render() {
    return (
      <>
        <Header />
        <Top onFindFilm={this.onFindFilm}/>
        <Main />
        <Content filmItemList={this.state.filmItemList}/>
        <Contacts />
        <Footer />
      </>
    );
  }

}

