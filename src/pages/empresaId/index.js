import React from 'react'
import "./style.css"
import { useHistory } from "react-router-dom"

import api from '../../services/api'
import EmpresaService from '../../services/empresa'

const EmpresaId = () => {
    

    const history = useHistory()

    return(
    <>
        <h1 className="pad-h1"> Nome da empresa</h1>
        <div className="container">
    <table className=" table table-striped tam-table">
    <thead >
        <tr className="">
        <th scope="col">#</th>
        <th scope="col">Cargo</th>
        <th scope="col">Salário</th>
        <th scope="col">Ambiente de trabalho</th>
       
        </tr>
    </thead>
    <tbody >
        <tr >
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        </tbody>
    </table>
    </div>
    <button className="btn especial"  onClick={() => history.push("/")}>Voltar </button>
        </>
)
}

export default EmpresaId