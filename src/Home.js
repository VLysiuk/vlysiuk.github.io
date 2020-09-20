import React from "react"
import 'font-awesome/css/font-awesome.min.css';
 
const Home = (props) => {
  return (
    <div id="home" class="home route bg-image">
      <div class="overlay-home"></div>
      <div class="home-content display-table">
        <div class="table-cell">
          <div class="container">
            <h1 class="home-title mb-4">Hi, I am Volodymyr Lysiuk</h1>         
            <p class="home-subtitle">Product Delivery ⚬ Software Development ⚬ Building Teams</p>
          </div>
          <div class="social-icon">
          <ul>
            <li><a href="https://github.com/VLysiuk" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/vlysiuk" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="mailto:volodymyr.lysiuk@gmail.com"><i className="fa fa-envelope"></i></a></li>
            <li><a href="tg://resolve?domain=karapuzzx"><i className="fa fa-telegram"></i></a></li>
            <li><a href="https://join.skype.com/invite/ocKDf0DP2DH7" target="_blank" rel="noopener noreferrer"><i className="fa fa-skype"></i></a></li>
          </ul>
        </div>
        </div>
      </div>
  </div>
  )
}
 
export default Home;