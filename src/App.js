import './App.css';
import React, { useState, useEffect } from 'react' ;
import axios from 'axios';

import Image from './components/Image'
import NasaCard from './components/NasaCard'
import PlanetList from './components/PlanetList'

export default function App() {
    const [nasaData, setNasaData] = useState([]); 

    console.log(nasaData);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DmqHDWfkfTBQlUPcUQrjqRxiaJSrhaRKRjacfKDV')
        .then(res => {
            // console.log(res)
            setNasaData(res.data)
        })
        .catch(err => {
            console.log(err)
    })
}, [])

return (
    <div>
        <Image url={nasaData.url}/>
        <NasaCard title={nasaData.title} copyright={nasaData.copyright} description={nasaData.explanation}/>
        <PlanetList />
    </div>
)
}