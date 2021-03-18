import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MISC } from '../../APISDK'
import './style.css'


function VideoDetails() {


  const history = useHistory()
  const { id } = useParams()
  const [embeddedHTML, setEmbeddedHTML] = useState([])
  const [title, setTitle] = useState('')
  const [channel, setChannel] = useState('')


  useEffect(() => {
    MISC.getTrendingFeedDetails(id)
      .then(res => {
        console.log(res)
        setEmbeddedHTML(res[0].items[0].player.embedHtml)
        setTitle(res[0].items[0].snippet.title)
        setChannel(res[0].items[0].snippet.channelTitle)
      }).catch(err => {
        console.log(err)
      })

  }, [id])

  return (
    // <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />




    <article className="video-container">
      <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />
      <div className="video-bottom-section">
        <div>
          <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
        </div>
        <div className="video-details">
          <div className="video-title">{title}</div>
          <div className="video-channel-name">{channel}</div>
          <div className="video-metadata">
            <span>12k views</span>
            •
              <span>1 week ago</span>
          </div>
        </div>
      </div>

    </article>





  );
}

export default VideoDetails;
