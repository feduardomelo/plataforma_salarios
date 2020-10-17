import React, {Component} from 'react'

import api from '../../services/api'

import './style.css'


class Colaborador extends Component{

    state = {
        empresas: [],
        empresa_id: Number,
        cargo: String,
        salario: Number,
        ambiente_trabalho: Number
    }

    async componentDidMount() {
        const response = await api.get('/empresa')
        console.log(response)
        this.setState({ empresas: response.data })

        
    }

    handleSubmit(event) {
        event.preventDefault()

        const data = {}

        data.append('empresa_id', empresa_id)
        data.append('cargo', cargo)
        data.append('salario', salario)
        data.append('ambiente_trabalho', ambiente_trabalho )


    }

    render() {
        
    
    const {
        empresas,
        avaliacao
    } = this.state
    

    return(
    <div className="content container">
        <title>Colaborador</title>
        <form onSubmit={handleSubmit}>
            <label>Nome da empresa</label>
            <select className="form-control form-control-lg" name="name_empresa" id="name_empresa">
                {empresas.map(empresa => (
                            <option name={empresa.id} >{empresa.nome_empresa}</option>
                        ))}
            </select>
        
            <label>Cargo</label>
            <input className="form-control form-control-lg"name="cargo" id="name_empresa">
                
            </input>

            <span>Salário</span>
            <div className="input-group mb-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">R$</span>
                    </div>
                    <input name="salario" type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
            </div>

            <div>
                <label>De 1 a 5, qual nota você dá para o ambiente de trabalho nessa empresa?</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" aria-label="1" name="ambiente_trabalho"/>
                            <label for="1">1</label>
                            <input type="radio" aria-label="2" name="ambiente_trabalho"/>
                            <label for="2">2</label>
                            <input type="radio" aria-label="3" name="ambiente_trabalho"/>
                            <label for="3">3</label>
                            <input type="radio" aria-label="4" name="ambiente_trabalho"/>
                            <label for="4">4</label>
                            <input type="radio" aria-label="5" name="ambiente_trabalho"/>
                            <label for="5">5</label>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/empresas" className="btn" type="submit">Submeter</a>
        </form>
    </div>
    )}
}



export default Colaborador