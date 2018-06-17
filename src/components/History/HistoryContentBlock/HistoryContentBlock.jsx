import React from 'react';
import './HistoryContentBlock.css';
import { Link } from 'react-router-dom';

const HistoryContentBlock = ({ el }) => {
    return (
        <div className='content-block' >
            <div>
                <h3 className='sub'>
                    {el.date}
                </h3>
            </div>
            <p className='article-name'>
                {el.articleName}
            </p>
            <Link
                to={`/history/${el.date.replace(/\s/g, '')}`}
            >
                <div className='image-block'>
                    <img src={el.image} alt='' className='image' />
                </div>
            </Link>
            <p className='quete'>{el.quete}</p>
            <div className='read-more-block'>
                <Link
                    to={`/history/${el.date.replace(/\s/g, '')}`}
                    className='read-more'
                >
                    READ MORE
                </Link>
            </div>
        </div>
    )
}

export default HistoryContentBlock;