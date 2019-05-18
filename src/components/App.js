import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Resume from './Resume';
import {getDifferenceYear, calculateBrand, getIncrementPlan} from '../helper'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataCar: {},
      priceSafe: ''
    }
  }
  quoteSafe = (data) => {
    const {brand, year, plan} = data;

    let price = 2000;

    const differenceYear = getDifferenceYear(year);
    price -= ((differenceYear * 3) * price) / 100;

    price *= calculateBrand(brand);

    let incrementPlan = getIncrementPlan(plan);

    price = parseFloat(incrementPlan * price).toFixed(2);
    
    this.setState({
      dataCar: data,
      priceSafe: price
    });    
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de auto"/>
        <div className="contenedor-formulario">
          <Form quoteSafe={this.quoteSafe}/>
        </div>
        <div>
          <Resume 
            dataCar= {this.state.dataCar} priceSafe={this.state.priceSafe}
          />          
        </div>
      </div>
    );
  }
}

export default App;
