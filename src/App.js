import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from './redux/actions'
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Loading from './components/Loading';
import PageIndicator from './components/PageIndicator';

import './App.scss';

var sampleData = {
  "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
  },
  "author": "Dan Stillman",
  "title": "D.C.-area forecast: Scattered showers possible this afternoon into evening; major warming by Monday",
  "description": "Tomorrow looks to be the nicer day of the weekend, followed by a spring-like Monday.",
  "url": "https://www.washingtonpost.com/weather/2020/02/01/dc-area-forecast-scattered-showers-possible-this-afternoon-into-evening-major-warming-by-monday/",
  "urlToImage": "https://www.washingtonpost.com/resizer/wOnQ4H7giOW_E-l-6NRx8-KzhHQ=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Q4GC2CCQLBBE3CDVAA5IVFK4LM.jpg",
  "publishedAt": "2020-02-01T10:00:28Z",
  "content": "Todays daily digit\r\nA somewhat subjective rating of the days weather, on a scale of 0 to 10.\r\n5/10: Not a great look for the first day of February--cloudy and cool with a chance of scattered p.m. showers.\r\nExpress forecast\r\n<ul><li>Today: Scattered afternoon … [+2169 chars]"
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchNews();
  }



  render() {
    return (
      <div className="App">
        <div className="NewsApp-wrapper">
          <Header>

          </Header>
          <div className="contents-container">
            {this.renderCards()}
          </div>
          <PageIndicator></PageIndicator>
        </div>
      </div>
    )
  }

  renderCards = () => {
    var { articles } = this.props;
    console.log('articles', articles)
    if (articles) {
       return articles.map((arc, index)=>{
         return <NewsCard data={arc} key={`news-card-${index}`}/>
       });
      //return <NewsCard data={articles[0]}/>

    }else{
      console.log('no news found')
      return <div>No news found...</div>
    }
    //return <NewsCard data={sampleData}/>
  }
}

const mapStateToProps = ({ news }) => {
  console.log(news)
  return {
    isFetching: news.isFetching,
    articles: news.articles,
    totalResults: news.totalResults,
    fetchFailed: news.fetchFailed
  }
}

const mapDispatchToProps = {
  fetchNews
}

App.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
