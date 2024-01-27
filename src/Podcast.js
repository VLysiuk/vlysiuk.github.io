import React from "react"
import ScriptTag from 'react-script-tag';
 
const Podcast = (props) => {
  return (
    <div class="page gray-page extra-bottom-padding" id="podcast">
    <div class="container">
      <h3 class="page-title">Podcast</h3>
      <div class="text-center">
        <p>I am a co-author of the <b>"80/20 Engineering Podcast."</b> We discuss management, engineering leadership, building strong teams, and organizational culture. We also review different tools and processes for shipping great products. Please follow us on your favorite platform!</p>
      </div>
      <div class="img-social-icon">
          <ul>
            <li><a href="https://www.youtube.com/@8020EngineeringPodcast" target="_blank" rel="noopener noreferrer"><img src="youtube.svg"></img></a></li>
            <li><a href="https://podcasts.apple.com/us/podcast/80-20-engineering-podcast/id1681482677" target="_blank" rel="noopener noreferrer"><img src="apple-podcast.svg"></img></a></li>
            <li><a href="https://open.spotify.com/show/7nqODeNqDvP5730ZJMe4Mi" target="_blank" rel="noopener noreferrer"><img src="spotify.svg"></img></a></li>

            <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMTY5MTUyLnJzcw==" target="_blank" rel="noopener noreferrer"><img src="google-podcasts.svg"></img></a></li>
            <li><a href="https://8020engineeringpodcast.buzzsprout.com/" target="_blank" rel="noopener noreferrer"><img src="webpage.svg"></img></a></li>
          </ul>
        </div>
        <div class="col-md-12 justify-content-center">
            <div id='buzzsprout-large-player'></div><ScriptTag type='text/javascript' charset='utf-8' src='https://www.buzzsprout.com/2169152.js?container_id=buzzsprout-large-player&player=large' />
        </div>
    </div>
    </div>
  )
}
 
export default Podcast;