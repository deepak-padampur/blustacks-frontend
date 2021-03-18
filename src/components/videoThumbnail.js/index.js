import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MISC } from '../../APISDK'
import { numFormatter } from '../../helper'
import { moment } from 'moment'
import './style.css'

function VideoThumbnail({ video, id }) {

  const [thumbnailSrc, setThumbnailSrc] = useState('')
  const [title, setTitle] = useState('')
  const [channelTitle, setChannelTitle] = useState('')
  const [viewCount, setViewCount] = useState('')
  const [publishedAt, setPublishedAt] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (video) {
      setThumbnailSrc(video.snippet.thumbnails.standard.url)
      setTitle(video.snippet.title)
      setChannelTitle(video.snippet.channelTitle)
      setViewCount(video.statistics.viewCount)
      let videoPublished = new Date(video.snippet.publishedAt);
      let formattedDate = (videoPublished.getMonth() + 1) + '/' + videoPublished.getDate() + '/' + videoPublished.getFullYear();
      setPublishedAt(formattedDate)
    }

  }, [video])

  return (


    <article className="video-container" onClick={() => history.push(`/details/${id}`)}>
      <div className="thumbnail" data-duration="12:24">
        <img className="thumbnail-image" src={thumbnailSrc} alt="loading" />
      </div>
      <div className="video-bottom-section">
        <div>
          <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" alt="loading" />
        </div>
        <div className="video-details">
          <div className="video-title">{title}</div>
          <div className="video-channel-name">{channelTitle}</div>
          <div className="video-metadata">
            <span>{viewCount && numFormatter(viewCount * 1)} views</span>
            •
          <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </article>





  );
}

export default VideoThumbnail;
