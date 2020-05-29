import React from 'react';

import './DetailsInfo.css'

const DetailsInfo = () => {
    return (
        <div className='DetailsInfo'>
            <h3>Person Name</h3>
            <div className='d-flex info_block'> 
                <img src='https://icdn.lenta.ru/images/2017/07/18/14/20170718144141447/detail_31a0e9ced0c9d9d04485d31ecba8d169.jpg' alt='planet'/>
                <ul className="detail_info_block"> 
                    <li>
                        <span>mass</span>
                        <span>3000</span>
                    </li>
                    <li>
                        <span>homeworld</span>
                        <span>venera</span>
                    </li>
                    <li>
                        <span>gender</span>
                        <span>male</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsInfo;