import React from 'react'
import './style.css'

const Nav = () => {
    return (
        <nav>
        <a href="./" className="btn">Logo</a>
        <a href="./" className="btn">Menu</a>
        <a href="./empresas" className="btn">Empresas</a>
        <a href="./colaborador" className="btn" id="colaborador">Colaborador</a>
        </nav>

    )
}

export default Nav