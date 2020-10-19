
import React, {useState} from 'react'
import './style.css'
import { useHistory } from "react-router-dom"
import EmpresaService from "../../services/empresa"


export default function Empresas(){
    const history = useHistory()
    
    const [empresas, setEmpresas] = useState([])
    
    EmpresaService.getEmpresa().then(response => {
        setEmpresas(response.data)
    })

    return(
        <div >
            <title>Empresas</title>
            <header className="container">
                <div className="col">
                <label ><h3>Qual empresa você procura? </h3></label>
                </div>
                <div className="col">

                <select onChange={(event) => {
                    
                    history.push(`empresa/${event.target.value}`)
                }} className="form-control form-control-lg" name="opcoes" id="filtro">
                    <option>Selecione a empresa</option>
                    {empresas.map(empresa => (
                        <option value={empresa.id} >{empresa.nome_empresa}</option>
                    ))}
                </select>
                </div>
            </header>

                <h2>Empresas</h2>
                <div className="row ">
                    <div className=" col-4 padding " id="blocos">

                        <div className="card card-body color ">
                            <h3>VTEX</h3>
                            
                            <p>Cargo: Cientista dos Dados</p>
                            <p>Valor do salário: R$8000,00</p>
                            <p>Total de análises: 3 </p>
                            <p>Ambiente de trabalho:4</p>
                            <a className="btn bg-light text-dark"  href={`/empresa/25`}>Acessar empresa</a>
                    </div>
                </div>
                <div className=" col-4 padding " id="blocos">

                        <div className="card card-body color ">
                            <h3>Cesar</h3>
                            
                            <p>Cargo: Desenvolvedor WEB júnior</p>
                            <p>Valor do salário: R$3000,00</p>
                            <p>Total de análises: 8 </p>
                            <p>Ambiente de trabalho:5</p>
                            <a className="btn bg-light text-dark"  href={`/empresa/2`}>Acessar empresa</a>
                    </div>
                </div>
                <div className=" col-4 padding " id="blocos">

                        <div className="card card-body color ">
                            <h3>Focus</h3>
                            
                            <p>Cargo: Analista de Redes</p>

                            <p>Valor do salário: R$4000,00</p>
                            <p>Total de análises: 8 </p>
                            <p>Ambiente de trabalho:5</p>
                            <a className="btn bg-light text-dark"  href={`/empresa/6`}>Acessar empresa</a>
                    </div>
                </div>
                
                
            
            </div>
        </div>
)}


