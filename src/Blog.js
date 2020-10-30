import React from "react"
 
const Blog = (props) => {
  return (
    <div class="page gray-page extra-bottom-padding" id="blog">
    <div class="container">
      <h3 class="page-title">Blog</h3>
      <div class="row gutters-80">
        <div class="col-md-4">
          <div class="card blog-box text-center">
            <img class="card-img-top blog-img" src={require('./assets/blog/blog-1.png')} alt="" />
            <div class="card-body">
              <h5 class="card-title">"Your brain at work" book review</h5>
              <p class="card-text">This book was suggested by my manager and I am very happy that red it...</p>
              <a href="#" class="btn btn-dark">Read more</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card blog-box text-center">
            <img class="card-img-top blog-img" src={require('./assets/blog/blog-1.png')} alt="" />
            <div class="card-body">
              <h5 class="card-title">"Your brain at work" book review</h5>
              <p class="card-text">This book was suggested by my manager and I am very happy that red it...</p>
              <a href="#" class="btn btn-dark">Read more</a>
            </div>
            <div class="card-footer text-muted">
              <span class="text-left">October 17, 2020</span>
              <span class="text-right"><i className="fa fa-clock"></i>5 min</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card blog-box text-center">
            <img class="card-img-top blog-img" src={require('./assets/blog/blog-1.png')} alt="" />
            <div class="card-body">
              <h5 class="card-title">"Your brain at work" book review</h5>
              <p class="card-text">This book was suggested by my manager and I am very happy that red it...</p>
              <a href="#" class="btn btn-dark">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
 
export default Blog;