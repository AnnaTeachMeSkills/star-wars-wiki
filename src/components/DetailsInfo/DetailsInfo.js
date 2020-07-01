import React from 'react';

import './DetailsInfo.css';
import SwapiContext from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';

export default class DetailsInfo extends React.Component {
    swapi = new SwapiService();
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
        const { personId, getInfo } = this.props;

        if(!personId) {
            return;
        }

        getInfo(personId).then((person) => {
            this.setState({
                person,
            });
        })
    }


    

    render () {

        
        if (!this.state.person) {
            return <p className="chooseItem"> Please, select from the list!</p>
        }

        const { id, name } = this.state.person;
        const { addInfo, img } = this.props;


        const elements = addInfo.map((item) => {
            return (
                <li key={item}>
                    <span>{`${item}:`} </span>
                    <span>{this.state.person[item]}</span>
                </li>
            );
        });

        return (
                <div className='DetailsInfo'>
                        <h3>{name}</h3>
                         <div className='info_block'> 
                            <img src={img + `${id}.jpg`} alt={name}/>
                            <ul className="detail_info_block"> 
                                {elements}
                            </ul>
                        </div>
                </div>
                       
        );
    }
}
