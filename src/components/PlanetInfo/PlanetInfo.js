import React from 'react';

import './PlanetInfo.css';
import SwapiContext from '../SwapiServiceContext';

export default class PlanetInfo extends React.Component {
    
    static contextType = SwapiContext;
        
    state = {
        planet: null,
    };

    componentDidMount () {
        this.upDatePlanet();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
        this.upDatePlanet();
        }
    }

    upDatePlanet() {
        const { personId } = this.props;

        if(!personId) {
            return;
        }

        this.context.getPlanet(personId).then((planet) => {
            this.setState({
                planet,
            });
        })
    }

    render () {
        
        if (!this.state.planet) {
            return <p className="chooseItem"> Please, choose a planet!</p>
        }

        const { id, name, diameter, population, gravity,climate, rotationPeriod   } = this.state.planet

        return (
                <div className='PlanetInfo'>
                        <h3>{name}</h3>
                         <div className='info_block'> 
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet'/>
                            <ul className="detail_info_block"> 
                                <li>
                                    <span>diameter: </span>
                                    <span>{diameter}</span>
                                </li>
                                <li>
                                    <span>population: </span>
                                    <span>{population}</span>
                                </li>
                                <li>
                                    <span>gravity: </span>
                                    <span>{gravity}</span>
                                </li>
                                <li>
                                    <span>climate: </span>
                                    <span>{climate}</span>
                                </li>
                                <li>
                                    <span>rotation period: </span>
                                    <span>{rotationPeriod}</span>
                                </li>
                            </ul>
                        </div>
                </div>
                       
        );
    }
}