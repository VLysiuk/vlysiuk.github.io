import React from "react"
 
const Services = (props) => {
  return (
    <div class="page gray-page" id="service">
    <div class="container" >
      <h3 class="page-title">Services</h3>
      <div class="row gutters-80">
          <div class="col-md-4">
            <div class="service-box text-center">
              <span><i className="fa fa-laptop fa-5x"></i></span>
              <h5 class="service-label">ENGINEERING</h5>
              <p class="text-justify px-3">Establishing and maintaining the best engineering practices. Building proper development lifecycle. Helping with technical decisions and architecture.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box text-center">
              <span><i className="fa fa-calendar fa-5x"></i></span>
              <h5 class="service-label">DELIVERY</h5>
              <p class="text-justify px-3">Delivering projects from planning to shipping to customers. Analizing customer needs and negotiating priorities. Organizing process that is driven by quality and transparence.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box text-center">
              <span><i className="fa fa-users fa-5x"></i></span>
              <h5 class="service-label">LEADERSHIP</h5>
              <p class="text-justify px-3">Building strong, self-organized teams. Growing people and culture that embraces reprect, diversity, success and trust. </p>
            </div>
          </div>
      </div >
      <div class="row gutters-80 center">
          <div class="col-md-4"/>
          <div class="col-md-4">
            <div class="service-box text-center">
              <span><i className="fa fa-cogs fa-5x"></i></span>
              <h5 class="service-label">TRANSFORMATION</h5>
              <p class="text-justify px-3">Helping companies to transform their day-to-day processes in order to eliminate existing waste, become more agile, be open for changes, be able to move quickly and easily.</p>
            </div>
          </div>
          <div class="col-md-4"></div>
      </div>
    </div>
    </div>
  )
}
 
export default Services;