
import React, {Component} from 'react'
import './style.css'
import { useHistory } from "react-router-dom"
import EmpresaService from "../../services/empresa"

class Empresas extends Component{
    state = {
        empresas: []
    }

    async componentDidMount(){
        const empresasTotal = await EmpresaService.getEmpresa()
        this.setState({ empresas: empresasTotal.data})
    }
    change(event){
        document.location = '/empresa/' + event.target.value    }

    render(){
        const { empresas } = this.state
        const empresaById = {}
        
        const avaliacoes  = []
        empresas.forEach(empresa => {
            if(empresa.avaliacao.length > 0  ){
                
                avaliacoes.push(empresa.avaliacao[0])
            }
            empresaById[empresa.id] = empresa
            
        });
        



    return(
        <div>
        <title>Empresas</title>
            <header className="container">
                <div className="col">
                <label ><h3>Qual empresa você procura? </h3></label>
                </div>
                <div className="col">

                <select onChange={this.change} className="form-control form-control-lg" name="opcoes" id="filtro">
                    <option >Selecione a empresa</option>
                    {empresas.map(empresa => (
                        <option value={empresa.id} >{empresa.nome_empresa}</option>
                    ))}
                </select>
                </div>
            </header>

                <h2>Empresas</h2>
                <div className="row ">
                
                {avaliacoes.map(avaliacao => {
                    let empresa = empresaById[avaliacao.empresa_id];
                    return (
                        <div className=" col-4 padding " id="blocos">

        <div className="card card-body color ">
                            <h3>{empresa.nome_empresa}</h3>
                            
                            <p>Cargo: {avaliacao.cargo}</p>
                            <p>Valor do salário: {avaliacao.salario}</p>
                            <p>Total de análises: {empresa.avaliacao.length} </p>
                            <p>Ambiente de trabalho:{avaliacao.ambiente_trabalho}</p>
                            <a className="btn bg-light text-dark"  href={`/empresa/${empresa.id}`}>Acessar empresa</a>
                        
                        </div>
                </div>
             
                        
                    )}
                )};
  
            </div>
        </div>
        )}}
export default Empresas


