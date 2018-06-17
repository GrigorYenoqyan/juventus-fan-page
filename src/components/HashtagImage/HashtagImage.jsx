import React from 'react';
import './HashtagImage.css';

const HashtagImage = ({ data }) => {
    return (
        <div className='hashtag-image-block'>
            <img src={data.hashtagImage}
             alt='hashtagImage'
             className='hashtag-image'
             />

            <span className='hashtag'>
                {data.text}
            </span>
        </div>
    )
}

export default HashtagImage;