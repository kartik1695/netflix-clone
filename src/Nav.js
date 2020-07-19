import React, {useState ,useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{

            if(window.scrollY> 100){
                handleShow(true)
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
       
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`} >
        <img src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600" 
            alt="Netflix logo"
            className="nav__logo"/>
        <img src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="" className="nav__avatar"/>
            
        </div>
    )
}

export default Nav
 