import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar } from '@material-ui/core';

import './../styles/card.scss';

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

class NewsCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.data) {
            const { source, author, title, description, url, urlToImage, publishedAt, content } = this.props.data;
            return (
                <Card>
                    <CardHeader avatar={title?<Avatar>{title.slice(0,1)}</Avatar>:null} title={title?title:'No Title'} subheader={publishedAt?moment(publishedAt).format('YYYY-MM-DD h:mm'):null}>
                        
                    </CardHeader>
                </Card>

            )
        } else {
            return null;
        }

    }
}

export default NewsCard
