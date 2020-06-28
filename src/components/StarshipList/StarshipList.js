import React from 'react';

import './StarshipList.css'
import withData from '../helpers/withData';
import SwapiService from '../../services/SwapiService';

 const StarshipList = (props) => {

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
        <ul className="StarshipList">
             {items}
        </ul>
    );
    
}




const { getAllStarships} = new SwapiService();


export default withData(StarshipList, getAllStarships);