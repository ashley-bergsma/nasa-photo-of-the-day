import React from 'react'; 
import style from 'styled-components'; 

const StyledPlanetCard = style.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue; 
    width: 20%;
`


const PlanetCard = (props) => {

    return (
        <StyledPlanetCard className='planetCard'>
            <h5>Planet Name: {props.name}</h5>
            <h6>English Name: {props.englishName}</h6>
            <div>
                <p>Discovered: {props.date}</p>
                <p>Discovered By: {props.person}</p>
            </div>
        </StyledPlanetCard>
    )
}

export default PlanetCard; 