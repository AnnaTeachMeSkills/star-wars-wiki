import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../services/SwapiService';

import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage/PeoplePage';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';


export default class App extends React.Component {

    swapi = new SwapiService();

    state = {
        isRandomPlanet: true,
        error: false,
    }

    componentDidCatch () {
        this.setState({
            error: true,
        })
    }

    onTogglePlanet = () => {
        this.setState ((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
    }

    

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }
        return (
            <div className='App'>
                <Header />
                {this.state.isRandomPlanet && <RandomPlanet />}
                <button 
                    onClick={this.onTogglePlanet}>
                    on/off planet
                </button>
                <ErrorTest />
                <PeoplePage />
                <div className='PeoplePage d-flex justify-content-between'> 
                    <ItemsList 
                        onItemClick={this.onPersonSelect}
                        getData = {this.swapi.getAllPlanet}
                        renderItem={(item) => 
                            `${item.name} 
                            (diameter ${item.diameter})`}
                    /> 
                    <DetailsInfo 
                        personId ={this.state.selectedPerson} 
                    />
            </div>
               
            </div>
        )
    }
    
}

