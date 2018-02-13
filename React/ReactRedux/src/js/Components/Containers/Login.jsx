import React, { Component } from 'react'

import Formulario from 'components/basics/Formulario'
import { Basico, Avancado } from 'components/basics/EntradaTexto'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            senha: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    verificarUsuario(){
        let token = ''

        if(this.state.email == '1' && this.state.senha == '1'){
            token = {tipo: 'Representante de OSC'}
        }if(this.state.email == '2' && this.state.senha == '2'){
            token = {tipo: 'Representante de OSC'}
        }

        console.log(token)
    }

    render(){
        return(
            <div id='Login'>
                <form>
                    <label>Email: </label>
                    <input type='text' name='email' placeholder='Digite o e-mail' value={this.state.email} onChange={this.handleChange}/>
                    <label>Senha: </label>
                    <input type='text' name='senha' placeholder='Digite a senha' value={this.state.senha} onChange={(e) => this.handleChange(e)}/>
                    <input type='button' value='Entrar' onClick={() => this.verificarUsuario()}/>
                </form>
            </div>
        )
    }
}