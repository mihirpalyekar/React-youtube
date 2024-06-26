import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants';
import VideoCard, {RedVideoBorderCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json()
    console.log(json)
    setVideos(json.items);
  }
  if (!videos.length) {
    return null
  }
    return (
      <div className="flex flex-wrap">
        <RedVideoBorderCard info={videos[0]} />
        {videos.map((video) => (
          <Link key={video.id} to={"/watch/?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    );
}

export default VideoContainer