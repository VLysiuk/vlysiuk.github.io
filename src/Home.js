import React from "react"
import 'font-awesome/css/font-awesome.min.css';
 
const Home = (props) => {
  return (
    <div id="home" class="home route bg-image">
    <div class="home-content display-table">
      <div class="table-cell">
        <div class="container">
          <h1 class="home-title mb-4">Hi, I am Volodymyr Lysiuk</h1>         
          <p class="home-subtitle">Product Delivery ⚬ Software Development ⚬ Building Teams</p>
        </div>
        <div class="social-icon">
        <ul>
          <li><i className="fa fa-github"></i></li>
          <li><i className="fa fa-linkedin"></i></li>
          <li><i className="fa fa-envelope"></i></li>
          <li><i className="fa fa-telegram"></i></li>
          <li><i className="fa fa-skype"></i></li>
        </ul>
      </div>
      </div>

    </div>
  </div>
  )
}
 
export default Home;