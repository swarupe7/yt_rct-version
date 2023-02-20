import React from 'react';
//import image from './assets/youtube.png';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            {/* <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src={image} alt="youtube logo"></img></h2> */}
            <div className='search-bar ui segment' style={{justifyContent:'center'}}>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <h4 style={{color:'white',fontFamily:'Bungee'}}>YT_LITE</h4>
                    <div className='field'>
                        <label htmlFor="video-search"></label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search Here.."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;