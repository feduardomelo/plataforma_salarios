import EmpresaService from '../../services/empresa'
import React, {Component} from 'react'

class Teste extends Component {
    state = {
        empresa: [],
    }

    async componentDidMount() {
        const response =await EmpresaService.getEmpresa()
        this.setState( { empresa: response.data})
        console.log(response.data)
    }

    render() {
        const {empresa} = this.state

        return(
            <div>
                <h1>Listando</h1>
                {empresa.map(empresas => (
                    <p>{empresas.nome_empresa}</p>
                ))}
            </div>
        )
    }
}

export default Teste