import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import './../styles/card.scss';

class NewsCard extends Component {
    redirectTo = (url) => {
        window.location.href = url;
        return;
    }

    render() {
        if (this.props.data) {
            const { source, title, description, url, urlToImage, publishedAt } = this.props.data;
            const sourceName = source.name;
            return (
                <Card className='NewsCard-item' onClick={() => this.redirectTo(url)}>
                    <CardHeader className='NewsCard-header' avatar={sourceName ? <Avatar className='NewsCard-avatar'>{sourceName.slice(0, 1)}</Avatar> : null} title={sourceName ? sourceName : ''} subheader={publishedAt ? moment(publishedAt).format('YYYY-MM-DD h:mm') : null}>
                    </CardHeader>
                    <LazyLoad height={190} once>
                        <CardMedia className='NewsCard-image' image={urlToImage || '/images/no_image.jpg'} title={title} />
                    </LazyLoad>
                    <CardContent>
                        <Typography variant="body1" color="textPrimary" component="summary" className="NewsCard-title">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="NewsCard-description">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>

            )
        } else {
            return null;
        }

    }
}

export default NewsCard
