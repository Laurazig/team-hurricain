import React, {useState} from "react";
import "./Header.scss"

const Header = ()=> {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const onMenuClick = () => {
        setMenuOpen(!menuOpen)
    }


 

        

return(
    <div>
         <header className={menuOpen?"nav-open": ""}>
                <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <div className="nav-toggle">
                <button onClick={onMenuClick} className="hamburger"></button>
                </div>

                <a href="#news">News</a>
                <a href="contact_form.html">Contact</a>
                <div className="dropdown">
                <button className="dropbtn">Teams</button>
                <div className="dropdown-content">
                    <a
                    href="https://www.linkedin.com/in/feichengmarketing/"
                    target="_blank"
                    >
                    Fei Cheng</a
                    >
                    <a
                    href="https://www.linkedin.com/in/maria-papadaki74/"
                    target="_blank"
                    >
                    Maria Papadaki</a
                    >
                    <a
                    href="https://www.linkedin.com/in/thanh-le-249415240/"
                    target="_blank"
                    >
                    Thanh Le</a
                    >
                    <a
                    href="https://www.linkedin.com/in/laura-hesse-a998048a/"
                    target="_blank"
                    >
                    Laura Hesse</a
                    >
                </div>
                </div>
                <a href="about.html">About</a>
            </div>
        </header>
    </div>
)
}
export default Header