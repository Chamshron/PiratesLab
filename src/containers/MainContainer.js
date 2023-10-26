import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PirateContainer from './PirateContainer.js';
import ShipContainer from './ShipContainer';
import RaidContainer from './RaidContainer';


const MainContainer = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/pirates/*" element={<PirateContainer />} />
        <Route path="/ships/*" element={<ShipContainer/> }/>
        <Route path='/raids/*' element={<RaidContainer/>}/>
      </Routes>
    </div>
  )
}

export default MainContainer;
