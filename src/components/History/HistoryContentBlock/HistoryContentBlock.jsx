import React from 'react';
import './HistoryContentBlock.css';
import { Link } from 'react-router-dom';

const HistoryContentBlock = ({ el }) => {
    return (
        <div className='content-block' >
            <div>
                <h3 className='sub'>
                    {el.date.replace(/-/g, ' - ')}
                </h3>
            </div>
            <p className='article-name'>
                {el.title}
            </p>
            <Link
                to={`/history/${el.date}`}
            >
                <div className='image-block'>
                    <img src={el.image} alt='' className='image' />
                </div>
            </Link>
            <p className='quete'>{el.subtitle}</p>
            <div className='read-more-block'>
                <Link
                    to={`/history/${el.date}`}
                    className='read-more'
                >
                    READ MORE
                </Link>
            </div>
        </div>
    )
}

export default HistoryContentBlock;