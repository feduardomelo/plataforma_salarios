import React from 'react'
import './style.css'


const Colaborador = () => {
    return(
    <div className="content container">
        <title>Colaborador</title>
        <form>
            <label>Nome da empresa</label>
            <select className="form-control form-control-lg" name="name_empresa" id="name_empresa">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="0">OUTRA</option>
            </select>
        
            <label>Cargo</label>
            <select className="form-control form-control-lg"name="name_empresa" id="name_empresa">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="0">OUTRA</option>
            </select>

            <span>Salário</span>
            <div className="input-group mb-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">R$</span>
                    </div>
                    <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
            </div>

            <div>
                <label>De 0 a 5, qual nota você dá para o ambiente de trabalho nessa empresa?</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" aria-label="1" name="nota"/>
                            <label for="1">1</label>
                            <input type="radio" aria-label="2" name="nota"/>
                            <label for="2">2</label>
                            <input type="radio" aria-label="3" name="nota"/>
                            <label for="3">3</label>
                            <input type="radio" aria-label="4" name="nota"/>
                            <label for="4">4</label>
                            <input type="radio" aria-label="5" name="nota"/>
                            <label for="5">5</label>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/empresas" className="btn" type="submit">Submeter</a>
        </form>
    
    </div>
)}



export default Colaborador