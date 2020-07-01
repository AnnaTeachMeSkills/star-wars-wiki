import React from 'react';

import PeopleList from '../PeopleList';
import DetailsInfo from '../DetailsInfo';
import ErrorComponent from '../ErrorComponent';
import Row from '../Row';

import './PeoplePage.css';
import SwapiService from '../../services/SwapiService';




export default class PeoplePage extends React.Component {

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
            <PeopleList 
                onItemClick={this.onPersonSelect}
                renderItem={(item) => 
                    `${item.name} 
                    (${item.gender}, ${item.mass}kg)`}
            /> 
        )

        const peopleInfo = (
            <DetailsInfo 
                getInfo = {this.swapi.getPerson}
                personId ={this.state.selectedPerson} 
                addInfo={
                    ['gender', 'mass', 'birthDate', 'hairColor', "height", "skinColor" ]
                }
                img={`https://starwars-visualguide.com/assets/img/characters/`}
            />
        )

        return (
            <div className='PeoplePage'> 
                <Row left={itemsList} right={peopleInfo}/>
            </div>
        )
    }
}



