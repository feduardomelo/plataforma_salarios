import React from 'react'
import './style.css'

const Footer = () => {
    return(
    
    <footer id="footer">
        <div className="dados">
            <img src={require("../img/eduardo.jpeg")}  className="perfil" alt=""/>
            <h1>Fábio Eduardo</h1>
            <div className="social">
                <a href="https://github.com/feduardomelo" target="_blank"><img src= {require("../img/logo_github.svg")} alt="" /></a>
                <a href="https://www.linkedin.com/in/eduardo-melo-96b3b1154/" target="_blank"><img src= {require("../img/logo_linkedin.png")} alt="" /></a>
            </div>
        </div>
        <div className="dados">
            <img src={require("../img/estela.jpeg")} className="perfil" alt=""/>
            <h1>Maria Estela</h1>
            <div className="social">
                <a href="https://github.com/estelasouza" target="_blank"><img src= {require("../img/logo_github.svg")} alt=""/></a>
                <a href="https://www.linkedin.com/in/maria-estela-souza-737ab216a/" target="_blank"><img src= {require("../img/logo_linkedin.png")} alt=""/></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer