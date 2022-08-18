import React, { Component } from 'react';


class TipoIngresso extends Component {
    
    render(){
        return <div >
            <h1 className='infoLine'>{this.props.tipo}: </h1>
            <h1 className='infoLine'>R${this.props.preco}</h1>
            <br></br>
        </div>
    }
}

export default TipoIngresso;