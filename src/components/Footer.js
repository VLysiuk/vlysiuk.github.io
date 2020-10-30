import React, {useState, useLayoutEffect}  from "react"
import "bootstrap/dist/css/bootstrap.css";
 
const Footer = (props) => {
    return(        
        <footer class="page-footer text-center font-small wow fadeIn" id="contact">
        <div class="pt-4">
            <p><i class="fa fa-phone mr-3"></i>+38 097 941 91 22</p>
            <p><i class="fa fa-envelope mr-3"></i>volodymyr.lysiuk@gmail.com</p>
        </div>

        <hr class="footer-line" />

        <div class="pb-1">
        <a href="https://www.facebook.com/volodymyr.lysiuk/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-facebook-f mr-3"></i>
        </a>

        <a href="https://twitter.com/vlysiuk" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-twitter mr-3"></i>
        </a>

        <a href="https://join.skype.com/invite/ocKDf0DP2DH7">
            <i class="fa fa-skype mr-3"></i>
        </a>

        <a href="tg://resolve?domain=karapuzzx">
            <i class="fa fa-telegram mr-3"></i>
        </a>

        <a href="https://www.linkedin.com/in/vlysiuk" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-linkedin mr-3"></i>
        </a>

        <a href="https://vlysiuk.github.io/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github mr-3"></i>
        </a>
        </div>
        <div class="footer-copyright py-3">
        © 2020 Copyright:
        <a href="https://vlysiuk.github.io/" target="_blank" rel="noopener noreferrer"> Volodymyr Lysiuk </a>
        </div>
    </footer>
    )
}

export default Footer;