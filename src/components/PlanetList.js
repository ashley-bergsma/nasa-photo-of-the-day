import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import PlanetCard from './PlanetCard';

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
        <div>
           {planets.map(body => {
               return (
                   <PlanetCard />
               )
           })}
        </div>
    )
}

export default PlanetList;

// i want to filter the array by bodies that are planets, and then map over the planets and create a card for them.