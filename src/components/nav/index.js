import React from 'react'
import './style.css'

const Nav = () => {
    return (
        <nav>
        <a href="/" className="logo"><img src={"https://image.flaticon.com/icons/svg/516/516466.svg"} alt="Imagem da logomarca"/></a>
        <a href="/" id="menu" className="btn">Menu</a>
        <a href="/empresas" className="btn">Empresas</a>
        <a href="/colaborador" className="btn" id="colaborador">Colaborador</a>
        </nav>

    )
}

export default Nav