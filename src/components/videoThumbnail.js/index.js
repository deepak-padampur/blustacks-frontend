import React, { useEffect, useState } from 'react'
import { MISC } from '../../APISDK'
import './style.css'

function VideoThumbnail({ video }) {
  const [embeddedHTML, setEmbeddedHTML] = useState('')
  const [thumbnailSrc, setThumbnailSrc] = useState('')
  const [title, setTitle] = useState('')
  const [channelTitle, setChannelTitle] = useState('')
  const [viewCount, setViewCount] = useState('')

  useEffect(() => {
    if (video) {
      setThumbnailSrc()
      setTitle(video.snippet.title)
      setChannelTitle(video.snippet.channelTitle)
      setViewCount(video.statistics.viewCount)
    }

  }, [video])

  return (
    // <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />

    <article className="video-container">
      <a href="#" className="thumbnail" data-duration="12:24">
        <img className="thumbnail-image" src="http://unsplash.it/36/36?gravity=center" />
      </a>
      <div className="video-bottom-section">
        <a href="#">
          <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
        </a>
        <div className="video-details">
          <a href="#" className="video-title">{title}</a>
          <a href="#" className="video-channel-name">{channelTitle}</a>
          <div className="video-metadata">
            <span>{viewCount} views</span>
            •
              <span>1 week ago</span>
          </div>
        </div>
      </div>
    </article>



  );
}

export default VideoThumbnail;
