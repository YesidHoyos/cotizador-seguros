import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    showResume = () => {
        const {brand, year, plan} = this.props.dataCar;

        if (!brand) {
            return null;
        }

        return(
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Marca: {brand}</li>
                <li>Año: {year}</li>
                <li>Plan: {plan}</li><br/>
                <li>Total: ${this.props.priceSafe}</li>              
            </div>
        )
    }

    render() {       

        return(
            <div>
                {this.showResume()}                
            </div>
        )
    }
}

export default Resume;