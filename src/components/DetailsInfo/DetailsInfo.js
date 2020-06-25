import React from 'react';

import './DetailsInfo.css';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class DetailsInfo extends React.Component {
    
    static contextType = SwapiContext;
        
    state = {
        person: null,
    };

    componentDidMount () {
        this.upDatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
        this.upDatePerson();
        }
    }

    upDatePerson() {
        const { personId } = this.props;

        if(!personId) {
            return;
        }

        this.context.getPerson(personId).then((person) => {
            this.setState({
                person,
            });
        })
    }

    render () {
        
        if (!this.state.person) {
            return <p> Please, select a person</p>
        }

        const { id, name, mass, birthDate, gender, hairColor, height, skinColor, } = this.state.person

        return (
                <div className='DetailsInfo'>
                        <h3>{name}</h3>
                         <div className='info_block'> 
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person'/>
                            <ul className="detail_info_block"> 
                                <li>
                                    <span>mass: </span>
                                    <span>{mass}</span>
                                </li>
                                <li>
                                    <span>birth date: </span>
                                    <span>{birthDate}</span>
                                </li>
                                <li>
                                    <span>gender: </span>
                                    <span>{gender}</span>
                                </li>
                                <li>
                                    <span>hair color: </span>
                                    <span>{hairColor}</span>
                                </li>
                                <li>
                                    <span>height: </span>
                                    <span>{height}</span>
                                </li>
                                <li>
                                    <span>skin color: </span>
                                    <span>{skinColor}</span>
                                </li>
                            </ul>
                        </div>
                        <ErrorTest />
                </div>
                       
        );
    }
}
