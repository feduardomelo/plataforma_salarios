import React, {Component} from 'react'
import './style.css'
import { useHistory } from "react-router-dom"

import api from '../../services/api'

class Empresas extends Component {
    state = {
        empresas: []
    }

    async componentDidMount() {
        const response = await api.get('/empresa')
        console.log(response)
        this.setState({ empresas: response.data })
    }
    
    render() {
        const {empresas} = this.state
        //const history = useHistory()

        

    return(
        <div>
            <title>Empresas</title>
            <header>
                <label >Qual empresa você procura?</label>
                <select className="form-control form-control-lg" name="opcoes" id="filtro">
                    {empresas.map(empresa => (
                        <option >{empresa.nome_empresa}</option>
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
                            <a className="btn" href={`/empresa/:id`}>Acessar</a>
                        </div>
                    ))
                ))}
                
                
            </div>
        </div>
)}

}

export default Empresas