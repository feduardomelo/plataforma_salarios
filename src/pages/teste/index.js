import api from '../../services/api'
import React, {Component} from 'react'

class Teste extends Component {
    state = {
        empresa: [],
    }

    async componentDidMount() {
        const response = await api.get('/avaliacao')
        console.log(response)
        this.setState( { empresa: response.data})
    }

    render() {
        const {empresa} = this.state
        console.log(empresa)

        return(
            <div>
                <h1>Listando</h1>
                {empresa.map(empresas => (
                    <p>{empresas.cargo}</p>
                ))}
            </div>
        )
    }
}

export default Teste