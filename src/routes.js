import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Empresas from './pages/empresas'
import EmpresaId from './pages/empresaId'
import Colaborador from './pages/colaborador'
import Teste from './pages/teste'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component = {Main}/>
            <Route path='/empresas' component = {Empresas}/>
            <Route path='/empresa/:id' component = {EmpresaId}/> 
            <Route path='/colaborador' component = {Colaborador}/>
            <Route path='/teste' component = {Teste}/>
        </Switch>
    
    </BrowserRouter>
)

export default Routes