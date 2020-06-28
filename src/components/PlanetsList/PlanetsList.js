import React from 'react';

import './PlanetsList.css'
import withData from '../helpers/withData';
import SwapiService from '../../services/SwapiService';

 const PlanetsList = (props) => {

  const {data, onItemClick, renderItem} = props;

   const renderItems=(arr) =>{
        return arr.map((item) => {
            const text = renderItem(item)
            return (
                <li 
                    className ="list-group-item" 
                    key={item.id}
                    onClick={() => onItemClick(item.id)}
                >
                    {text}
                </li>
            );
        });
    }

    const items = renderItems(data);

    return(
        <ul className="PlanetsList">
             {items}
        </ul>
    );
    
}




const { getAllPlanet} = new SwapiService();


export default withData(PlanetsList, getAllPlanet);