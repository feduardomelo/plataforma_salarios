import React from 'react'
import './style.css'

const Main = () => {
    return (
    <div className="container">
        <div className="text">
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus magnam quos similique corrupti nobis iure iusto. Ea molestiae similique assumenda aut quae impedit, accusamus fuga consequatur illo maiores odio!</p>
        </div>

        <div className="image">
            <img src={require("../../components/img/image_index.png")}alt="Pessoa pesquisando dados sobre vagas de emprego."/>
        </div>

    </div>
    )
}

export default Main