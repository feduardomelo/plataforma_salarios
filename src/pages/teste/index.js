// CÓDIGO DUDU


// import React, { useState, useEffect} from 'react'
// import './style.css'
// import { useHistory } from "react-router-dom"
// import EmpresaService from "../../services/empresa"


// export default function Empresas() {
//   const history = useHistory()

//   const [empresas, setEmpresas] = useState([])

//   EmpresaService.getEmpresa().then(response => {
//     setEmpresas(response.data)
//     // setAvaliacao(response.data[0].avaliacao[0])
//   })

  
  
//   return(
//     <div>
//     <title>Empresas</title>
//         <header className="container">
//             <div className="col">
//             <label ><h3>Qual empresa você procura? </h3></label>
//             </div>
//             <div className="col">

//             <select onChange={(event) => {
                    
//                     history.push(`empresa/${event.target.value}`)
//                 }} className="form-control form-control-lg" name="opcoes" id="filtro">
//                 <option>Selecione a empresa</option>
//                 {empresas.map(empresa => (
//                     <option value={empresa.id} >{empresa.nome_empresa}</option>
                    
//                 ))}
//             </select>
//             </div>
//         </header>

//             <h2>Empresas</h2>
//             <div className="row ">
            
//             {empresas.map((empresa) => {
//               // handleAv(empresa)
//               return(
                
//                 <div className=" col-4 padding " id="blocos">
//                     <div className="card card-body color ">
//                         <h3 >{empresa.nome_empresa}</h3>
                        
//                         {/* <p>Cargo: {avaliacao.cargo}</p>
//                         <p>Valor do salário: {avaliacao.salario}</p> */}
//                         <p>Total de análises: {empresa.avaliacao.length} </p>
//                         {/* <p>Ambiente de trabalho:{avaliacao.ambiente_trabalho}</p> */}
//                         <a className="btn bg-light text-dark"  href={`/empresa/${empresa.id}`}>Acessar empresa</a>
//                     </div>
//                 </div>
//                 )}
//             )}

//         </div>
//     </div>
//     )
// }



//CÓDIGO ESTELA

// import React, {Component} from 'react'
// import './style.css'
// import { useHistory } from "react-router-dom"
// import EmpresaService from "../../services/empresa"

// class Empresas extends Component{
//     state = {
//         empresas: [],
//     }

//     async componentDidMount(){
//         const empresasTotal = await EmpresaService.getEmpresa()
        
//         this.setState({ 
//             empresas: empresasTotal.data,
            
//         })
//     }

//     render(){
//         const { empresas } = this.state
//         console.log(empresas )
//         const id = 1
//         const avaliacao = empresas[id] || []
//         console.log(avaliacao)


//     return(
//         <div>
//         <title>Empresas</title>
//             <header className="container">
//                 <div className="col">
//                 <label ><h3>Qual empresa você procura? </h3></label>
//                 </div>
//                 <div className="col">

//                 <select  className="form-control form-control-lg" name="opcoes" id="filtro">
//                     <option>Selecione a empresa</option>
//                     {empresas.map(empresa => (
//                         <option value={empresa.id} >{empresa.nome_empresa}</option>
                        
//                     ))}
//                 </select>
//                 </div>
//             </header>

//                 <h2>Empresas</h2>
//                 <div className="row ">
                
//                 {empresas.map(empresa => (
                    
//                     <div className=" col-4 padding " id="blocos">
//                         <div className="card card-body color ">
//                             <h3>{empresa.nome_empresa}</h3>
                            
//                             <p>Cargo: {avaliacao.cargo}</p>
//                             <p>Valor do salário: {avaliacao.salario}</p>
//                             <p>Total de análises: {empresa.avaliacao.length} </p>
//                             <p>Ambiente de trabalho:{avaliacao.ambiente_trabalho}</p>
//                             <a className="btn bg-light text-dark"  href={`/empresa/${empresa.id}`}>Acessar empresa</a>
//                         </div>
//                     </div>
//                     )
//                 )}
  
//             </div>
//         </div>
//         )}}
// export default Empresas



