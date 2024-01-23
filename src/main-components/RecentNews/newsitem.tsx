import React from 'react'
import './index.scss'

type NewsProps = {
    imageUrl : string,
    date : string,
    heading : string,
    para : string,
}

function newsitem({imageUrl, date, heading, para} : NewsProps) {
  return (
    <div className='padding-20 news-item-container'>
        <img src={imageUrl} alt="news-item" className='news-image border-radius-20' />
        <p className='news-date'>{date}</p>
        <p className='news-paraHeading'>{heading}</p>
        <p className='news-paraSubheading'>{para}</p>
    </div>
  )
}

export default newsitem