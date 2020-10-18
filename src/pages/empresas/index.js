import React, {useState} from 'react'
import './style.css'
import { useHistory } from "react-router-dom"

import api from '../../services/api'

export default function Empresas(){
    const history = useHistory()
    
    const [empresas, setEmpresas] = useState([])
    
    api.get('/empresa').then(response => {
        setEmpresas(response.data)
    })

    return(
        <div>
            <title>Empresas</title>
            <header>
                <label >Qual empresa você procura?</label>
                <select onChange={(event) => {
                    
                    history.push(`empresa/:${event.target.value}`)
                }} className="form-control form-control-lg" name="opcoes" id="filtro">
                    <option>Selecione a empresa</option>
                    {empresas.map(empresa => (
                        <option value={empresa.id} >{empresa.nome_empresa}</option>
                    ))}
                </select>
            </header>

                <h2>Algumas avaliações</h2>
            <div className="container" id="blocos">
                {empresas.map(empresa => (
                    empresa.avaliacao.map(avaliacao => (
                        <div className="empresas">
                            <h3>{empresa.nome_empresa}</h3>
                            
                            <p>Cargo: {avaliacao.cargo}</p>
                            <p>Valor do salário: {avaliacao.salario}</p>
                            <p>Total de análises: {empresa.avaliacao.length} </p>
                            <p>Ambiente de trabalho:{avaliacao.ambiente_trabalho}</p>
                            <a className="btn" href={`/empresa/:${empresa.id}`}>Acessar empresa</a>
                        </div>
                    ))
                ))}
            </div>
        </div>
)}



