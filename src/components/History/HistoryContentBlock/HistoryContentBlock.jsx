import React from 'react';
import PropTypes from "prop-types";
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

HistoryContentBlock.propTypes = {
    el: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}

export default HistoryContentBlock;