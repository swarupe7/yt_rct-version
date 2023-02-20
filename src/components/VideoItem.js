import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
             <div class="col">
              <div class="card">
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt="image"/>
            {/* <div className='content'> */}
            <div class="card-body">
                <div class='card-title'  style={{fontFamily:'Pacifico'}}>{video.snippet.title}</div>
                <p class="card-text">{video.snippet.description}</p>
            </div>
            </div>
            </div>
        </div>
    )
};




{/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}



export default VideoItem;