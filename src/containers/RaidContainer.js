import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import RaidList from '../components/raids/RaidList';

const RaidContainer = () => {
    const [raids, setRaids] = useState([])

    useEffect(() => {
        const raidsPromise = fetch('/api/raids').then(res => res.json())
        Promise.all([raidsPromise])
        .then((data) => {
            setRaids(data[0])
        })})
    return (
        <Routes>
            <Route path='/' element={<RaidList raids = {raids}/>}/>
        </Routes>
      );
}
 
export default RaidContainer;