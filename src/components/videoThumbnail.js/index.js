import React, { useEffect, useState } from 'react'
import { MISC } from '../../APISDK'
import './style.css'

function VideoThumbnail({ video }) {
  const [embeddedHTML, setEmbeddedHTML] = useState('')
  const [thumbnailSrc, setThumbnailSrc] = useState('')

  useEffect(() => {
    if (video) {
      setThumbnailSrc()
    }

  }, [video])

  return (
    // <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />

    <article className="video-container">
      <a href="#" className="thumbnail" data-duration="12:24">
        <img className="thumbnail-image" src={thumbnailSrc} />
      </a>
      <div className="video-bottom-section">
        <a href="#">
          <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
        </a>
        <div className="video-details">
          <a href="#" className="video-title">Video Title</a>
          <a href="#" className="video-channel-name">Channel Name</a>
          <div className="video-metadata">
            <span>12K views</span>
            •
              <span>1 week ago</span>
          </div>
        </div>
      </div>
    </article>



  );
}

export default VideoThumbnail;
