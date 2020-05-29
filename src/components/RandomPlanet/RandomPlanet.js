import React from 'react';

import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css';


export default class RandomPlanet extends React.Component {
    
    constructor() {
        super();
        this.upDatePlanet()
    }

    swapi = new SwapiService();

    state = {
        name: null,
        diameter: null,
        population: null,
        gravity: null,
    }

    upDatePlanet() {
        this.swapi.getPlanet(2).then((planet) => {
            this.setState({
                name: planet.name,
                diameter: planet.diameter,
                population: planet.population,
                gravity: planet.gravity,
            });
            console.log(planet)
        });
    }

    
    render() {


        const {name, diameter, population, gravity } = this.state;
        return (
            <div className='RandomPlanet'>
                <h3>{name}</h3>
                <div className="d-flex planet_block"> 
                    <img src='https://icdn.lenta.ru/images/2017/07/18/14/20170718144141447/detail_31a0e9ced0c9d9d04485d31ecba8d169.jpg' alt='planet' />
                    <ul className='planet_info_block'> 
                        <li> 
                            <span>diameter</span>
                            <span>{ diameter }</span>
                        </li>
                        <li> 
                            <span>population</span>
                            <span>{ population }</span>
                        </li>
                        <li> 
                            <span>gravity</span>
                            <span>{ gravity }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
