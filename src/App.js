import React, { useEffect, useState } from 'react'
import { MISC } from './APISDK'
import VideoThumbnail from './components/videoThumbnail.js'
import './App.css'

function App() {
  const [embeddedHTML, setEmbeddedHTML] = useState('')
  const [content, setContent] = useState([])
  useEffect(() => {
    MISC.getTrendingFeed().then(res => {
      console.log(res)
      setContent(res[0].items)
      setEmbeddedHTML(res[0].items[0].player.embedHtml)

    }).catch(err => {
      console.log(err)
    })

  }, [])
  return (
    // <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />
    <>
      <div className="videos">
        <section className="video-section">
          {content ? content.map(video => {
            return (<VideoThumbnail id={video._id} video={video} embeddedHTML={embeddedHTML} />)
          }) : 'loading'}

        </section>
      </div>
    </>


  );
}

export default App;
