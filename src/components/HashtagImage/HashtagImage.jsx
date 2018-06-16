import React from 'react';
import { hashtagImageData } from '../../data.js';
import './HashtagImage.css';

const HashtagImage = () => {
    return (
        <div className='hashtag-image-block'>
            <img src={hashtagImageData.image}
             alt='hashtagImage'
             className='hashtag-image'
             />

            <span className='hashtag'>
                {hashtagImageData.hashtag}
            </span>
        </div>
    )
}

export default HashtagImage;