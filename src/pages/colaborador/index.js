import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import EmpresaService from "../../services/empresa"
import AvaliacaoService from '../../services/avaliacao'

import './style.css'

export default function Colaborador() {
    const history = useHistory()

    const [empresas, setEmpresas] = useState([])

    const [empresa_id, setEmpresa_id] = useState()
    const [cargo, setCargo] = useState('')
    const [salario, setSalario] = useState()
    const [ambiente_trabalho, setAmbiente_trabalho] = useState()

    async function handleSubmit(event) {
        event.preventDefault()

        const data = new FormData()


        data.append('empresa_id', empresa_id)
        data.append('cargo', cargo)
        data.append('salario', salario)
        data.append('ambiente_trabalho', ambiente_trabalho)

        await AvaliacaoService.postAvaliacao( data).then(() => console.log('POST FUNCIONOU'))

        alert("Cadastro realizado com sucesso")

        history.push('/empresas')

    }

    

    useEffect(() => {
        EmpresaService.getEmpresa().then(response => {
            setEmpresas(response.data)
        })
    })

    function handleChange(event) {
        console.log(event.target.value)
        setEmpresa_id(event.target.value)
    }

    return(

            <div className="content container">
                <title>Colaborador</title>
                <form onSubmit={handleSubmit}>
                    <label>Nome da empresa</label>
                    <select onChange={event => handleChange(event)} className="form-control form-control-lg" name="name_empresa" id="name_empresa">
                        <option>Selecione a empresa</option>
                        {empresas.map(empresa => (
                                    
                                    <option 
                                        
                                        value={empresa.id}  
                                    >
                                        {empresa.nome_empresa}</option>
                        ))}
                    </select>
                
                    <label>Cargo</label>
                    <input onChange={event => setCargo(event.target.value)} className="form-control form-control-lg"name="cargo" id="name_empresa">
                        
                    </input>
        
                    <span>Salário</span>
                    <div className="input-group mb-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">R$</span>
                            </div>
                            <input onChange={event => setSalario(event.target.value)} name="salario" type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
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
                                    <input onChange={event => setAmbiente_trabalho(event.target.value)}value="1" type="radio" aria-label="1" name="ambiente_trabalho"/>
                                    <label for="1">1</label>
                                    <input onChange={event => setAmbiente_trabalho(event.target.value)}value="2" type="radio" aria-label="2" name="ambiente_trabalho"/>
                                    <label for="2">2</label>
                                    <input onChange={event => setAmbiente_trabalho(event.target.value)}value="3" type="radio" aria-label="3" name="ambiente_trabalho"/>
                                    <label for="3">3</label>
                                    <input onChange={event => setAmbiente_trabalho(event.target.value)}value="4" type="radio" aria-label="4" name="ambiente_trabalho"/>
                                    <label for="4">4</label>
                                    <input onChange={event => setAmbiente_trabalho(event.target.value)}value="5"type="radio" aria-label="5" name="ambiente_trabalho"/>
                                    <label for="5">5</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className=" btn bg-light text-dark" type="submit">Submeter</button>
                </form>
            </div>
            )
}

