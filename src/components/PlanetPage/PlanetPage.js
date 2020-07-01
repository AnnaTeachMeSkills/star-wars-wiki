import React from 'react';

import PlanetsList from '../PlanetsList';
import DetailsInfo from '../DetailsInfo';
import ErrorComponent from '../ErrorComponent';
import Row from '../Row';

import './PlanetPage.css';
import SwapiService from '../../services/SwapiService';




export default class PlanetPage extends React.Component {

    swapi = new SwapiService();

    state= {
        selectedPerson: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({error:true})
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id,
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <PlanetsList 
                onItemClick={this.onPersonSelect}
                renderItem={(item) => 
                    `${item.name} 
                    (diameter ${item.diameter})`}
            /> 
        )
 
        const detailsInfo = (
            <DetailsInfo 
                getInfo={this.swapi.getPlanet}
                personId ={this.state.selectedPerson} 
                addInfo={
                    ['diameter', 'population', 'gravity', 'climate', "rotationPeriod"]
                }
                img={`https://starwars-visualguide.com/assets/img/planets/`}
            />
        )

        return (
            <div className='PeoplePage'> 
                <Row left={itemsList} right={detailsInfo}/>
            </div>
        )
    }
}



