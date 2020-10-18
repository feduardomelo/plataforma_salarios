import React, { Component } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom"
import EmpresaService from '../../services/empresa'


class EmpresaId extends Component {
    state = {
        empresa:  []
    }
    async componentDidMount(){
        const  empresaId  = await EmpresaService.getEmpresaById(2)
        console.log(empresaId.data)
        this.setState({empresa:empresaId.data[0]})

    }

    render(){
        const { empresa } = this.state
       const avaliacao = empresa.avaliacao || []

    return(

    <>

        <h1 className="pad-h1"> Nome da empresa</h1>
        <div className="container">
    <table className=" table table-striped tam-table">
    <thead >
        <tr className="">
        <th scope="col">Cargo</th>
        <th scope="col">Salário</th>
        <th scope="col">Ambiente de trabalho</th>
       
        </tr>
    </thead>
    <tbody >
    {avaliacao.map((av) => {
        return(
        <tr >
        <td>{av.cargo}</td>
        <td>{av.salario}</td>
        <td>{av.ambiente_trabalho}</td>
        </tr>)})}
        </tbody>
    </table>
    </div>
    <button className="btn especial"  >Voltar </button>
    </>
)}
}

export default EmpresaId