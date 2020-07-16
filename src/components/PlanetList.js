import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import style from 'styled-components';
import PlanetCard from './PlanetCard';

const StyledPlanetList = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

function PlanetList() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(response => {
            console.log(response.data.bodies)
            setPlanets(response.data.bodies)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <StyledPlanetList>
           {planets.filter(body => body.isPlanet === true).map(filteredBody => {
               return (
                   <PlanetCard 
                   key={filteredBody.id} 
                   name={filteredBody.name} 
                   englishName={filteredBody.englishName} 
                   date={filteredBody.discoveryDate} 
                   person={filteredBody.discoveredBy}
                   />
               )
           })}
        </StyledPlanetList>
    )
} 

export default PlanetList;
