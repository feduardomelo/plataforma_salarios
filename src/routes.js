import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Empresas from './pages/empresas'
import Colaborador from './pages/colaborador'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component = {Main}/>
            <Route path='/empresas' component = {Empresas}/>
            <Route path='/colaborador' component = {Colaborador}/>
        </Switch>
    
    </BrowserRouter>
)

export default Routes