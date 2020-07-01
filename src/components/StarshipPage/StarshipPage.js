import React from 'react';

import StarshipList from '../StarshipList';
import DetailsInfo from '../DetailsInfo';
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
            <DetailsInfo 
                personId ={this.state.selectedShip} 
                getInfo={this.swapi.getStarship}
                addInfo={
                    ['model', 'manufacturer', 'length', 'maxSpeed', "passengers", "consumables", "crew"]
                }
                img={`https://starwars-visualguide.com/assets/img/starships/`}
            />
        )

        return (
            <div className='StarshipPage'> 
                <Row left={stapshipList} right={starshipInfo}/>
            </div>
        )
    }
}