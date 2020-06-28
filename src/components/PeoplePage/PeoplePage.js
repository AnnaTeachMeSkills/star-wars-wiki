import React from 'react';

import PeopleList from '../PeopleList';
import PeopleInfo from '../PeopleInfo';
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
            <PeopleInfo 
                personId ={this.state.selectedPerson} 
            />
        )

        return (
            <div className='PeoplePage'> 
                <Row left={itemsList} right={peopleInfo}/>
            </div>
        )
    }
}



