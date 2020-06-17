import React from 'react';

import ItemsList from '../ItemsList';
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
            <ItemsList 
                onItemClick={this.onPersonSelect}
                renderItem={(item) => 
                    `${item.name} 
                    (${item.diameter}kg)`}
            /> 
        )

        const detailsInfo = (
            <DetailsInfo 
                personId ={this.state.selectedPerson} 
            />
        )

        return (
            <div className='PeoplePage'> 
                <Row left={itemsList} right={detailsInfo}/>
            </div>
        )
    }
}



