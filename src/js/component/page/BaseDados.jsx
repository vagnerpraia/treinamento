import React, { Component } from 'react'

import TituloSecao from 'component/basic/TituloSecao'

export default class BaseDados extends Component {
    render(){
        return(
            <div id='BaseDados'>
                <TituloSecao titulo='Base de Dados'/>
            </div>
        )
    }
}