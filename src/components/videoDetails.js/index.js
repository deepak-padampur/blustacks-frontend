import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MISC } from '../../APISDK'
import { numFormatter } from '../../helper'
import './style.css'


function VideoDetails() {
  const { id } = useParams()
  const [embeddedHTML, setEmbeddedHTML] = useState([])
  const [title, setTitle] = useState('')
  const [channel, setChannel] = useState('')
  const [viewCount, setViewCount] = useState('')
  const [statistics, setStatistics] = useState({})
  const [description, setDescription] = useState('')


  useEffect(() => {
    MISC.getTrendingFeedDetails(id)
      .then(res => {
        console.log(res)
        setEmbeddedHTML(res[0].items[0].player.embedHtml)
        setTitle(res[0].items[0].snippet.title)
        setChannel(res[0].items[0].snippet.channelTitle)
        setViewCount(res[0].items[0].statistics.viewCount)
        setStatistics(res[0].items[0].statistics)
        setDescription(res[0].items[0].snippet.description)
      }).catch(err => {
        console.log(err)
      })

  }, [id])

  return (
    <div className="videos">
      <section className="video-section-details">

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
                <span>{viewCount && numFormatter(viewCount * 1)} views</span>
                •
              <span>1 week ago</span>
              </div>
              <div className="statistics">
                <div>
                  <strong>likes:</strong>
                  {statistics.likeCount && numFormatter(statistics.likeCount * 1)}
                </div>
                <div>
                  <strong>dislikes:</strong>
                  {statistics.dislikeCount && numFormatter(statistics.dislikeCount * 1)}
                </div>
                <div>
                  <strong>favourites:</strong>
                  {statistics.favoriteCount && numFormatter(statistics.favoriteCount * 1)}
                </div>
              </div>

            </div>
          </div>
          <div className="description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

        </article>
      </section>
    </div>





  );
}

export default VideoDetails;
