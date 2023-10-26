import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import ShipList from '../components/ships/ShipList';

const ShipContainer = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        const shipsPromise = fetch('/api/ships').then(res => res.json());
        Promise.all([shipsPromise])
        .then((data) => {
            setShips(data[0])
        })})

    return ( 
        <Routes>
            <Route path="/" element={<ShipList ships = {ships}/>}/>
        </Routes>
     );
}
 
export default ShipContainer;