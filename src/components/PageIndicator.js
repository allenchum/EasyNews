import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, fetchNews } from './../redux/actions';

import '../styles/page-indicator.scss';

class PageIndicator extends Component {
    calcPagesLength = () => {
        const { totalResults, pageSize } = this.props;
        return Math.min(Math.ceil(totalResults / pageSize), 10);
    }
    handleChangePage = (target) => {
        const { currPage, pageSize } = this.props;
        const pagesLength = this.calcPagesLength();

        if (target === 'next') {
            if (currPage < pagesLength){
                this.props.changePage(pageSize, currPage + 1);
                this.props.fetchNews(pageSize, currPage + 1);
            } 
        } else if (target === 'prev') {
            if (currPage !== 1) {
                this.props.changePage(pageSize, currPage - 1);
                this.props.fetchNews(pageSize, currPage - 1);
            }
        } else if (typeof target === 'number') {
            this.props.changePage( pageSize, target);
            this.props.fetchNews( pageSize, target);
        } else {
            return;
        }
    }

    render() {
        const { currPage } = this.props;
        const pagesLength = this.calcPagesLength();
        const start = currPage === 1 ?
            currPage  //First page
            : ((currPage + 2 > pagesLength) && (pagesLength > 2)) ?
                pagesLength - 2 //Last pages
                : currPage - 1; //Middle pages
        const pagesArr = (pagesLength > 3) ? [start, start + 1, start + 2] : Array.from(Array(pagesLength), (x, index) => start + index);

        const mid = pagesArr.map((num) =>
            <div className={num === currPage ? "page-indic active" : "page-indic"} key={num} onClick={() => this.handleChangePage(num)}>{num}</div>
        )
        return (
            <div className="page-indicator-container">
                <div className="page-indic prev" onClick={() => this.handleChangePage('prev')}></div>
                {mid}
                <div className="page-indic next" onClick={() => this.handleChangePage('next')}></div>
            </div>
        )
    }
}

const mapStateToProps = ({ news }) => ({
    currPage: news.currPage,
    totalResults: news.totalResults,
})

const mapDispatchToProps = ({
    changePage,
    fetchNews
})

export default connect(mapStateToProps, mapDispatchToProps)(PageIndicator)
