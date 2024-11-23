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
                  <p class="about-bio about-skills text-center"><strong>CORE COMPETENCIES</strong></p>
                  <div class="row">
                    <div class="col-md-6 skill-box2">
                    <ul class="skill-box1">
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> People management</span>
                        </li>
                        <li>
                        <span class="skill-item"><i className="fa fa-check"></i> Project Management</span>
                        </li>
                          <span class="skill-item"><i className="fa fa-check"></i> Leadership and Execution</span>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> Strategic Planning</span>
                        </li>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> Problem solving</span>
                        </li>
                        </ul>
                        
                      </div>
                      <div class="col-md-6">
                      <ul class="skill-box1">
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> Software Development</span>
                        </li>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> Software Analysis &amp; Design</span>
                        </li>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> High-load solutions</span>
                        </li>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> CI/CD</span>
                        </li>
                        <li>
                          <span class="skill-item"><i className="fa fa-check"></i> Test Automation</span>
                        </li>
                        </ul>
                      </div>
                    </div>
                  
              </div>
              <div class="col-md-6 about-content">
                <p>I am an experienced engineering leader with a strong technical background. I am all-in into managing complex issues and delivering high-quality products and customer value.</p>
                <p>Being a software developer for more than 12 years, I have built the good engineering base and understanding of SDLC. I have been working on building scalable and hi-load applications, have a strong knowledge of design principles and object oriented programming, understand infrastructure and quality assurance.</p>
                <p class="about-description">For the past 8 years, I have been working as an engineering manager, managing teams from 4 to 25 people. As a manager, I enjoy empowering and inspiring people, and building strong teams and culture within the organization. I truly believe in leadership by example and think that success comes with honesty, dedication, and hard work.</p>
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