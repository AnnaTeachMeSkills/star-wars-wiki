import React from 'react';

import StarshipList from '../StarshipList';
import StarshipInfo from '../StarshipInfo';
import ErrorComponent from '../ErrorComponent';
import Row from '../Row';

import './StarshipPage.css';
import SwapiService from '../../services/SwapiService';




export default class StarshipPage extends React.Component {

    swapi = new SwapiService();

    state= {
        selectedShip: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({error:true})
    }

    onShipSelect = (id) => {
        this.setState({
            selectedShip: id,
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorComponent />
        }

        const stapshipList = (
            <StarshipList 
                onItemClick={this.onShipSelect}
                renderItem={(item) => 
                    `${item.name} 
                    (${item.model})`}
            /> 
        )

        const starshipInfo = (
            <StarshipInfo 
                personId ={this.state.selectedShip} 
            />
        )

        return (
            <div className='StarshipPage'> 
                <Row left={stapshipList} right={starshipInfo}/>
            </div>
        )
    }
}