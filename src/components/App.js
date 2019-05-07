import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
	state = {
		presupuesto: '',
		restante: '',
		gastos: {}
	};
	// Agregar un nuevo gasto al state
	agregarGasto = gasto => {
		// Realizar una copia del state actual
		const gastos = { ...this.state.gastos };
		console.log('Se agregó el gasto' + gasto);
		console.log(gastos);

		// Agregar gasto al objeto del state

		// Ponerlo en el state
	};
	render() {
		return (
			<div className='App container'>
				<Header titulo='Gasto Semanal' />
				<div className='contenido-principal contenido'>
					<div className='row'>
						<div className='one-half column'>
							<Formulario agregarGasto={this.agregarGasto} />
						</div>
						<div className='one-half column' />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
