import React from "react"
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const Certificates = (props) => {
    return (
        <div class="gray-page">
            <div class="row cert-row">
            <Carousel
                slidesPerPage={2}
                slidesPerScroll={1}
                animationSpeed={2500}
                autoPlay={3000}
                itemWidth={450}
                offset={20}
                clickToChange
                centered
                stopAutoPlayOnHover
                infinite
                >
                    <img src={require('./assets/calculus_cert_small.png')} alt=''/>
                    <img src={require('./assets/pmi_prep_small.jpg')} alt=''/>
                    <img src={require('./assets/pmi_cert_small.png')} alt=''/>
                    <img src={require('./assets/salef_for_it_small.jpg')} alt=''/>
                    <img src={require('./assets/pm_kse_small.jpg')} alt=''/>
                    <img src={require('./assets/time_management_small.jpg')} alt=''/>
                    <img src={require('./assets/business_lead_small.jpg')} alt=''/>
                    <img src={require('./assets/middle_manager_small.jpg')} alt=''/>
                    <img src={require('./assets/functional_cert_small.png')} alt=''/>
                    <img src={require('./assets/pmi_prep_1_small.jpg')} alt=''/>
            </Carousel>
            </div>
        </div>
    )
}

export default Certificates;