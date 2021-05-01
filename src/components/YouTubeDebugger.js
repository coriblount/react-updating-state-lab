// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
      super();
  
      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      };
    }

    handleChangeBirate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                birate: 12
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className="birate" onClick={this.handleChangeBirate}> Change Birate</button>
                <button className="resolution" onClick={this.handleChangeResolution}> Change Resolution</button>

            </div>
        )
    }
}
  

export default YouTubeDebugger