import React, { useEffect, useState } from 'react'
import { MISC } from './APISDK'
import VideoThumbnail from './components/videoThumbnail.js'
import './App.css'

function App() {
  const [embeddedHTML, setEmbeddedHTML] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])
  useEffect(() => {
    setLoading(true)
    MISC.getTrendingFeed().then(res => {
      console.log(res)
      setContent(res[0].items)
      setEmbeddedHTML(res[0].items[0].player.embedHtml)
      setLoading(false)

    }).catch(err => {
      console.log(err)
      setLoading(false)
    })

  }, [])
  return (
    <>
      <div className="videos">
        <section className="video-section">
          {content && !loading ? content.map(video => {
            return (<VideoThumbnail key={video._id} id={video._id} video={video} embeddedHTML={embeddedHTML} />)
          }) : 'loading'}

        </section>
      </div>
    </>


  );
}

export default App;
