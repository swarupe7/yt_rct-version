import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import image from './assets/youtube.png';
import bg from './assets/Myproject.jpg';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            
             
           <>
             <div className='bb' resizeMode='repeat' style={{ backgroundImage:`url(${bg})`,backgroundPosition: 'center',backgroundRepeat:'repeat-y',
backgroundSize: 'cover',
position:'static',
width: '100vw',
height: '100vh'}}>
             <nav class="navbar navbar-light bg-dark  ">
                <img src={image}  style={{width:50}}/>
      
                 <a class="navbar-brand  text-light" style={{fontFamily:'Bungee'}} href="http://youtube.com">YT_LITE</a>
                 </nav>


             <div className='content'>
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar className="cnt" handleFormSubmit={this.handleSubmit}/>

               
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>

          
            </div>

            </>
           

            
        )
    }
}

export default App;