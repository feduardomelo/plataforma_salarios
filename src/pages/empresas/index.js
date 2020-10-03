import React from 'react'
import './style.css'

const Empresas = () => {
    return(
        <div>
            <title>Empresas</title>
            <header>
                <label >O que você procura?</label>
                <select name="opcoes" id="filtro">
                    <option value="0">Filtro</option>
                    <option value="Ambiente de Trabalho">Ambiente de Trabalho</option>
                    <option value="Salário">Salário</option>
                    <option value="Nome">Nome</option>
                </select>
            </header>

            <div className="container" id="blocos">
                <div className="empresas">
                    <h1>Empresa 1</h1>
                    <span>Tecnologias utilizadas</span>
                    <ul>
                        <li>Another list item</li>
                        <li>Yup, another list item</li>
                        <li>Another list item</li>
                    </ul>
                    <p>Cargo:</p>
                    <p>Valor do salário:</p>
                    <p>Total de análises:</p>
                    <p>Ambiente de trabalho</p>
                </div>

                <div className="empresas">
                    <h1>Empresa 2</h1>
                    <span>Tecnologias utilizadas</span>
                    <ul>
                        <li>Another list item</li>
                        <li>Yup, another list item</li>
                        <li>Another list item</li>
                    </ul>
                    <p>Cargo:</p>
                    <p>Valor do salário:</p>
                    <p>Total de análises:</p>
                    <p>Ambiente de trabalho</p>
                </div>

                <div className="empresas">
                    <h1>Empresa 3</h1>
                    <span>Tecnologias utilizadas</span>
                    <ul>
                        <li>Another list item</li>
                        <li>Yup, another list item</li>
                        <li>Another list item</li>
                    </ul>
                    <p>Cargo:</p>
                    <p>Valor do salário:</p>
                    <p>Total de análises:</p>
                    <p>Ambiente de trabalho</p>
                </div>
                
            </div>
        </div>
)
}

export default Empresas