import React, { Component } from 'react';
class Evento extends Component {
    render(){
        return <div className='titleGroup'>
            <div className='JoinText'>
                <h1  id='MainTitle'>{this.props.nome}</h1>
            </div>
            
            <div className='JoinText'>
                <h1 className='infoLine title' >Data: </h1>
                <h1 className='infoLine'>{this.props.data}:</h1>
                <br></br>
                <br></br>
            </div>
            <div className='JoinText'>
                <h1 className='infoLine title' >Horario: </h1>
                <h1 className='infoLine'>{this.props.horario}:</h1>
                <br></br>
                <br></br>
            </div>
            <div className='JoinText'>
                <h1 className='infoLine title' >Local: </h1>
                <h1 className='infoLine'>{this.props.local}:</h1>
                <br></br>
                <br></br>
            </div>
            <div className='JoinText'>
                <h1 className='infoLine title' >Cidade: </h1>
                <h1 className='infoLine'>{this.props.cidade}:</h1>
                <br></br>
                <br></br>
            </div>
            <div className='JoinText'>
                <h1 className='infoLine title' >Genero: </h1>
                <h1 className='infoLine'>{this.props.genero}:</h1>
                <br></br>
            </div>
            
            
            
            
            
        </div>
    }
}

export default Evento;