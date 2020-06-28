import React from 'react';

import './StarshipInfo.css';
import SwapiContext from '../SwapiServiceContext';

export default class StarshipInfo extends React.Component {
    
    static contextType = SwapiContext;
        
    state = {
        ship: null,
    };

    componentDidMount () {
        this.upDateShip();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
        this.upDateShip();
        }
    }

    upDateShip() {
        const { personId } = this.props;

        if(!personId) {
            return;
        }

        this.context.getStarship(personId).then((ship) => {
            this.setState({
                ship,
            });
        })
    }

    render () {
        
        if (!this.state.ship) {
            return <p className="chooseItem"> Please, choose a starship!</p>
        }

        const { id, name, model, manufacturer, length,maxSpeed, passengers,consumables,crew   } = this.state.ship

        return (
                <div className='StarshipInfo'>
                        <h3>{name}</h3>
                         <div className='info_block'> 
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt='starship'/>
                            <ul className="detail_info_block"> 
                                <li>
                                    <span>model: </span>
                                    <span>{model}</span>
                                </li>
                                <li>
                                    <span>manufacturer: </span>
                                    <span>{manufacturer}</span>
                                </li>
                                <li>
                                    <span>length: </span>
                                    <span>{length}</span>
                                </li>
                                <li>
                                    <span>max speed: </span>
                                    <span>{maxSpeed}</span>
                                </li>
                                <li>
                                    <span>passengers: </span>
                                    <span>{passengers}</span>
                                </li>
                                <li>
                                    <span>consumables: </span>
                                    <span>{consumables}</span>
                                </li>
                                <li>
                                    <span>crew: </span>
                                    <span>{crew}</span>
                                </li>
                            </ul>
                        </div>
                </div>
                       
        );
    }
}