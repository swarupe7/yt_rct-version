import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
      
       {/* <p style={{fontSize:'25px',color:'white'}} className='cnt'>
       This site is designed to save your time      
          </p> */}
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h5 className="ui header" style={{color:'white'}}><b>{video.snippet.title}</b></h5>
        <p style={{color:'white'}}>{video.snippet.description}</p>
      </div>
    </div>
  );
};



export default VideoDetail;
