import React, { useState, useEffect }  from 'react';


const Image = props => {
    return (
                <div><img 
                src={props.url}
                className=""
                alt="Nasa Daily"
                /></div>
    );
}


export default Image;