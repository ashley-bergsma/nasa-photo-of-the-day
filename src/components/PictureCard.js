import React, { useState, useEffect } from 'react'; 
import Image from './Image'



const PictureCard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
                <p>Copyright: {props.copyright} </p> 
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default PictureCard; 