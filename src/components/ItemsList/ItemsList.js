import React from 'react';

import './ItemsList.css'
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';

export default class ItemsList extends React.Component {

    swapi = new SwapiService();

    state = {
        people: null,
        load: true
    }

    componentDidMount(){
       this.swapi.getAllPeople().then((people) => {
            this.setState({
                people,
            })
        })
        this.swapi.getAllPeople()
            .then(this.onPeopleLoaded)

    }

    getInfo(people) {
        const element = people.map((el) => {
            const itemPeople = el.name;
            const id = el.id
            return (
               <li key ={id}> {itemPeople} </li>
            )
        });
        return element;
    }

    onPeopleLoaded = (people) => {
        this.setState({
            people,
            load: false,
        });
    }


    render () {

        const { people, load } = this.state

        const elements = people ? this.getInfo(people): null;
        const loader = load ? <Loader /> : null;
        

        return (
            <div className='ItemsList'>
                {loader}
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
    
}

