import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from './redux/actions'
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Loading from './components/Loading';
import PageIndicator from './components/PageIndicator';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 10;
  }

  componentDidMount() {
    this.props.fetchNews(this.pageSize, this.props.currPage);
  }

  isIncludeText = (str, text) => {
    return str?.toLowerCase().includes(text.toLowerCase());
  }



  render() {
    const { showLoading, direction } = this.props;
    return (
      <div className="App" dir={direction}>
        <div className="NewsApp-wrapper">
          <Header>

          </Header>
          <div className="contents-container">
            {showLoading ? <Loading /> : this.renderCards()}
          </div>
          <PageIndicator pageSize={this.pageSize}></PageIndicator>
        </div>
      </div>
    )
  }

  renderCards = () => {
    let { articles, searchInputText } = this.props;
    articles = articles.filter((arc) => {
      return (this.isIncludeText(arc.title, searchInputText) || this.isIncludeText(arc.description, searchInputText));
    })

    if (articles && Array.isArray(articles) && articles.length > 0) {
      return articles.map((arc, index) => {
        return <NewsCard data={arc} key={`news-card-${index}`} />
      });
    } else {
      console.log('no news found')
      return <div>Sorry, no news found...</div>
    }
    //return <NewsCard data={sampleData}/>
  }
}

const mapStateToProps = ({ news, language }) => {
  return {
    isFetching: news.isFetching,
    articles: news.articles,
    totalResults: news.totalResults,
    fetchFailed: news.fetchFailed,
    showLoading: news.showLoading,
    searchInputText: news.searchInputText,
    currPage: news.currPage,
    currentLanguage: language.currentLanguage,
    direction: language.direction
  }
}

const mapDispatchToProps = {
  fetchNews
}

App.propTypes = {
  isFetching: PropTypes.bool,
  articles: PropTypes.array,
  totalResults: PropTypes.number,
  fetchFailed: PropTypes.bool,
  showLoading: PropTypes.bool,
  searchInputText: PropTypes.string,
  currPage: PropTypes.number,
  currentLanguage: PropTypes.string,
  direction: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
