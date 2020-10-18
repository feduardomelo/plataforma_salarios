
import './style.css'
import { useHistory } from "react-router-dom"
import EmpresaService from '../../services/empresa'
import React, {Component} from 'react'

class Empresas extends Component{
    state = {
        empresa : []
    }
    async componentDidMount() {
        const response =await EmpresaService.getEmpresa()
        this.setState( { empresa: response.data})
        console.log(response.data)
    }
    render(){
        const { empresa} = this.state
        // const history = useHistory()
        empresa.map(b=>{
            b.avaliacao.forEach(av=>console.log(av))
        })
        return(
            <div>
                <title>Empresas</title>
                <header>
                    <label >Qual empresa você procura?</label>
                    <select className="form-control form-control-lg" name="opcoes" id="filtro">
                        <option value="0">Filtro</option>
                        <option value="Ambiente de Trabalho">Ambiente de Trabalho</option>
                        <option value="Salário">Salário</option>
                        <option value="Nome">Nome</option>
                    </select>
                </header>
    
                <div className="container" id="blocos">
               

                { empresa.map(empresas =>(

                    <div className="empresas col-4">
        <h1>{empresas.nome_empresa}</h1>                    

        <p>Cargo:</p>
        <p>Valor do salário:</p>
        <p>Total de análises:</p>
        <p>Ambiente de trabalho:</p>
        <p>Situação da empresa: {empresas.situação_empresa}</p>
        <button className="btn" className="btn" > acessar </button>

                        
                    </div>
                    ))}
                </div>
            </div>
    )
    }
}

export default Empresas