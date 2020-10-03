import React from 'react'
import './style.css'

const Main = () => {
    return (
    
    <div className="container">

        
        <div className="text">
            <title>Plataforma</title>
            <h1>Quanto Você Ganha?</h1>
            <p>Um banco de cargos e salários do mercado de tecnologia na cidade do Recife. Aqui você pode consultar os benefícios e requisitos da empresa desejada.</p>
        </div>

        <div className="image">
            <img src={require("../../components/img/image_index.png")}alt="Pessoa pesquisando dados sobre vagas de emprego."/>
        </div>

    </div>
    )
}

export default Main