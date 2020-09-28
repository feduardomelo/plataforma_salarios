import React from 'react'
import './style.css'

const Colaborador = () => {
    return(
    <div className="content">

        <label>Nome da empresa</label>
        <select name="name_empresa" id="name_empresa">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="0">OUTRA</option>
        </select>
    
        <label>Cargo</label>
        <select name="name_empresa" id="name_empresa">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="0">OUTRA</option>
        </select>
        
        <input placeholder="Salário" type="text"/>
        

        <button type="submit">Submeter</button>
    
    </div>
)}

export default Colaborador