import React from "react"

const About = (props) => {
  return (
    <div class="page gray-page" id="about">
      <div class="container box-shadow-full">
        <h3 class="page-title">About me</h3>
        <div class="row gutters-80">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6 about-image">
                    <img class="img-shadow" src={require('./assets/about_photo.jpg')} alt="" />
                  </div>
                  <div class="col-md-6">
                    <p class="about-bio"><strong>NAME :</strong> Volodymyr Lysiuk</p>
                    <p class="about-bio"><strong>PROFILE :</strong> Engineering manager</p>
                    <p class="about-bio"><strong>LOCATION :</strong> Kyiv, Ukraine</p>
                  </div>
                </div>
                  <p class="about-bio"><strong>SKILLS</strong></p>
                  <div>
                    <span class="skill-box">Engineering   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">People Management   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Agile   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Software Development   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Project Management   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Product Delivery   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Leadership   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">SDLC   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Architecture   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Scalability   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">High-load   <i className="fa fa-tag"></i></span>
                    <span class="skill-box">Quality Assurance    <i className="fa fa-tag"></i></span>
                    <span class="skill-box">.NET    <i className="fa fa-tag"></i></span>
                  </div>
              </div>
              <div class="col-md-6 about-content">
                <p class="about-description">Certified Agile practitioner and software developer with 10+ years of professional experience.
                  Have a good understanding of software development life cycle(SDLC), Agile process and practices that
                  includes managing product backlog, release plannings and delivering products to production.
                  I have experience in building scalable and hi-load applications, have a strong knowledge of design principles and object oriented programming.
                  Like to lead and inspire people, manage complex issues and deliver the high-quality products to the customers. </p>
                <div class="row">
                  <div class="col-md-5">
                    <a class="btn btn-outline-dark about-button" href="V.Lysiuk_CV_current.pdf">DOWNLOAD CV</a>
                  </div>
                  <div class="col-md-5">
                    <a class="btn btn-outline-dark about-button" href="#contact">CONTACT ME</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
 
export default About;