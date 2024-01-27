import React, {useState, useLayoutEffect}  from "react"
import "bootstrap/dist/css/bootstrap.css";
 
const Navigation = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useLayoutEffect(() => {
        const handleScroll = e => {
          setScrollY(window.scrollY)
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, []);

    return (
        <nav className={scrollY > 20? "navbar navbar-b navbar-reduce navbar-expand-md fixed-top" 
                    : "navbar navbar-b navbar-trans navbar-expand-md fixed-top"} id="mainNav">
        <div class="container">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}> 
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarDefault">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="#home">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#about">ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#service">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#podcast">PODCAST</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">CONTACTS</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}
 
export default Navigation;