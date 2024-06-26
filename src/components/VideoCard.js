import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;

  return (
    <div className="p-2 m-2 w-72 rounded-lg shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
}

export const RedVideoBorderCard = ({info}) => {
  return (
    <div className='p-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard